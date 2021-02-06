import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BatchPayload {
  @Field()
  count: number;
}
