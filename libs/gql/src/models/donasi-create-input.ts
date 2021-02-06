import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DonasiCreateInput {
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
