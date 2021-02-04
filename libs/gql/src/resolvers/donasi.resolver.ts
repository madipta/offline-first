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

@InputType()
class DonasiCreateInput {
  @Field()
  createdAt: number;

  @Field(() => String)
  id: string;

  @Field(() => String)
  name?: string | null;

  @Field(() => String, { nullable: true })
  phone?: string | null;

  @Field()
  amount: number;
}


@Resolver(Donasi)
export class UserResolver {
  constructor(@Inject(DonasiService) private donasiService: DonasiService) {}

  @Mutation(() => Donasi)
  async create(@Args('data') data: DonasiCreateInput): Promise<Donasi> {
    return this.donasiService.create({
      id: data.id,
      createdAt: new Date(data.createdAt),
      name: data.name,
      phone: data.phone,
      amount: data.amount,
    });
  }

  @Query(() => Donasi, { nullable: true })
  async oneById(@Args('id') sid: number) {
    return this.donasiService.oneById({ sid });
  }

  @Query(() => [Donasi])
  async pagelist(@Args('skip') skip: number, @Args('take') take: number) {
    return this.donasiService.pagelist({ skip, take });
  }
}
