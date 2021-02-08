import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DonasiPagelistInput {
  @Field()
  take: number;

  @Field()
  skip: number;

  @Field(() => String, { nullable: true })
  filter?: string | null;

  @Field(() => String, { nullable: true })
  sort?: string | null;

  @Field(() => String, { nullable: true })
  order?: string | null;
}
