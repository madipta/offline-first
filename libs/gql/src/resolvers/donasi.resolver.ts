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
import { DonasiListInput } from '../models/donasi-list-input';
import { DonasiPagelistInput } from '../models/donasi-pagelist-input';

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
  async pagelist(@Args('data') data: DonasiPagelistInput) {
    const { skip, take, filter } = data;
    let { sort, order } = data;
    sort = sort ?? 'syncedAt';
    order = order ?? 'desc';
    const orderBy = { [sort]: order };
    let where = {};
    if (filter) {
      where = {
        OR: [{ name: { contains: filter } }, { phone: { contains: filter } }],
      };
    }
    return this.donasiService.pagelist({
      skip,
      take,
      where,
      orderBy,
    });
  }

  @Query(() => [Donasi])
  async list(@Args('data') data: DonasiListInput) {
    let { sort, order } = data;
    sort = sort ?? 'syncedAt';
    order = order ?? 'desc';
    const orderBy = { [sort]: order };
    const filter = data.filter;
    let where = {};
    if (filter) {
      where = {
        OR: [{ name: { contains: filter } }, { phone: { contains: filter } }],
      };
    }
    return this.donasiService.pagelist({
      where,
      orderBy,
    });
  }
}
