import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class TyreUpdateDTO {
  @Field(() => ID)
  id: number;
  @Field()
  amount: number;
}
