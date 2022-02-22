import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiskInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
