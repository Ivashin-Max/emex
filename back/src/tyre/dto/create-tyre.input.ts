import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TyreCreateDTO {
  @Field()
  amount: string;
  @Field()
  serial: string;
  @Field()
  brand: string;
  @Field()
  name: string;
  @Field()
  width: string;
  @Field()
  height: string;
  @Field()
  radius: string;
  @Field()
  season: string;
}
