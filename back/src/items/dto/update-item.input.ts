import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput {
  @Field()
  id: number;
  @Field()
  amount: number;
  @Field({ nullable: true })
  price: number;
  @Field({ nullable: true })
  brand: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  special: string;
  @Field({ nullable: true })
  itemtype: string;
}

