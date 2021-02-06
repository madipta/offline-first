import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DonasiService } from '@offline-first/services';
import { Donasi } from '../models/donasi';
import { DonasiCreateInput } from '../models/donasi-create-input';
import { BatchPayload } from '../models/batch-payload';
import { Prisma } from '@prisma/client';

@InputType()
class DonasiCreateInputs {
  @Field(() => [DonasiCreateInput])
  batch: DonasiCreateInput[];
}

const donasiMapper = (data: DonasiCreateInput) => {
  const { createdAt, ...rest } = data;
  return {
    ...rest,
    createdAt: new Date(createdAt),
  };
};

@Resolver(Donasi)
export class DonasiResolver {
  constructor(@Inject(DonasiService) private donasiService: DonasiService) {}

  @Mutation(() => Donasi)
  async create(@Args('data') data: DonasiCreateInput): Promise<Donasi> {
    return this.donasiService.create(donasiMapper(data));
  }

  @Mutation(() => BatchPayload)
  async createMany(
    @Args('data') data: DonasiCreateInputs
  ): Promise<BatchPayload> {
    const dataFixed = data.batch.map((val) => donasiMapper(val));
    return this.donasiService.createMany(dataFixed);
  }

  @Query(() => Donasi, { nullable: true })
  async oneById(@Args('id') sid: number) {
    return this.donasiService.oneById({ sid });
  }

  @Query(() => [Donasi])
  async pagelist(@Args('skip') skip: number, @Args('take') take: number) {
    return this.donasiService.pagelist({
      skip,
      take,
      orderBy: { syncedAt: 'desc' },
    });
  }
}
