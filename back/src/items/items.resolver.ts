import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) { }

  @Mutation(() => Item)
  async createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
    return await this.itemsService.create(createItemInput);
  }

  @Query(() => [Item], { name: 'items' })
  findAll() {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'findOne' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemsService.findOne(id);
  }

  @Query(() => [Item], { name: 'findAllTyped' })
  findAllTyped(@Args('type', { type: () => String }) type: string) {
    return this.itemsService.findAllTyped(type);
  }

  @Query(() => [Item], { name: 'findExactAmountTyped' })
  findExactAmountTyped(
    @Args('type', { type: () => String }) type: string,
    @Args('amount') amount: number,
  ) {
    return this.itemsService.getExactAmountTyped(amount, type);
  }

  @Mutation(() => Item, { name: 'updateOneItem' })
  updateItem(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.itemsService.updateOne(updateItemInput);
  }

  @Mutation(() => Item, { name: 'updateMultipleItems' })
  updateMultipleItems(
    @Args('updateItemsInput') updateItemInput: UpdateItemInput,
  ) {
    // return this.itemsService.updateMultiple(updateItemInput);
  }

}
