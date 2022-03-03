import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  amount: number;
  @Field()
  price: number;
  @Field()
  brand: string;
  @Field()
  name: string;
  @Field()
  special: string;
  @Field()
  itemtype: string;
}
