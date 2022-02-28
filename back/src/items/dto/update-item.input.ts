import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput {
  @Field()
  id: number;
  @Field()
  amount: number;
}
