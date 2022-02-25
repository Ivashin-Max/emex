import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DisksService } from './disks.service';
import { Disk } from './entities/disk.entity';
import { CreateDiskInput } from './dto/create-disk.input';
import { UpdateDiskInput } from './dto/update-disk.input';

@Resolver(() => Disk)
export class DisksResolver {
  constructor(private readonly diskService: DisksService) { }

  @Query(() => [Disk], { name: 'getAllDisks' })
  findAll() {
    return this.diskService.findAllDisks();
  }

  @Query(() => [Disk], { name: 'getSerial' })
  async findSerial(@Args('serial') serial: number) {
    return await this.diskService.getSerialDisk(serial);
  }

  @Query(() => [Disk], { name: 'getExactAmountDisks' })
  async getExactAmount(@Args('amount') amount: number) {
    return await this.diskService.getExactAmountDisk(amount);
  }

  @Query(() => Disk)
  async findOneDisk(@Args('id') id: number) {
    return await this.diskService.getOneDisk(id);
  }

}
