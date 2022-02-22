import { CreateDiskInput } from './create-disk.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiskInput extends PartialType(CreateDiskInput) {
  @Field(() => Int)
  id: number;
}
