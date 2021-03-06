import 'reflect-metadata'
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Donasi {
  @Field(() => ID)
  sid: number

  @Field()
  id: string

  @Field()
  createdAt: Date

  @Field(() => String, { nullable: true })
  name?: string | null

  @Field(() => String, { nullable: true })
  phone?: string | null

  @Field()
  amount: number

  @Field(() => Date, { nullable: true })
  syncedAt?: Date | null

  @Field()
  sync: boolean
}
