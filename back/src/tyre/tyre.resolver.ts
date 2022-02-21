import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TyreCreateDTO } from './dto/create-tyre.input';
import { TyreUpdateDTO } from './dto/update-tyre.input';
import { Tyre } from './entities/tyre.entity';
import { TyreService } from './tyre.service';

@Resolver(() => Tyre)
export class TyreResolver {
  constructor(private readonly tyreService: TyreService) { }
  @Query(() => [Tyre], { name: 'getAllTyres' })
  findAll() {
    return this.tyreService.findAll();
  }

  @Query(() => [Tyre], { name: 'getSerial' })
  async findSerial(@Args('serial') serial: string) {
    return await this.tyreService.getSerial(serial);
  }

  @Query(() => [Tyre], { name: 'getExactAmount' })
  async findExactAmount(@Args('amount') amount: number) {
    return await this.tyreService.getExactAmount(amount);
  }

  @Query(() => Tyre)
  async findOneTyre(@Args('id') id: number) {
    return await this.tyreService.getOneTyre(id);
  }

  @Mutation(() => Tyre, { name: 'createTyre' })
  create(@Args('tyre') tyre: TyreCreateDTO) {
    return this.tyreService.createTyre(tyre);
  }

  @Mutation(() => Tyre, { name: 'updateTyre' })
  update(@Args('tyre') tyre: TyreUpdateDTO) {
    return this.tyreService.updateTyre(tyre);
  }
}
