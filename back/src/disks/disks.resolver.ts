import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DisksService } from './disks.service';
import { Disk } from './entities/disk.entity';
import { CreateDiskInput } from './dto/create-disk.input';
import { UpdateDiskInput } from './dto/update-disk.input';

@Resolver(() => Disk)
export class DisksResolver {
  constructor(private readonly disksService: DisksService) {}

  @Mutation(() => Disk)
  createDisk(@Args('createDiskInput') createDiskInput: CreateDiskInput) {
    return this.disksService.create(createDiskInput);
  }

  @Query(() => [Disk], { name: 'disks' })
  findAll() {
    return this.disksService.findAll();
  }

  @Query(() => Disk, { name: 'disk' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.disksService.findOne(id);
  }

  @Mutation(() => Disk)
  updateDisk(@Args('updateDiskInput') updateDiskInput: UpdateDiskInput) {
    return this.disksService.update(updateDiskInput.id, updateDiskInput);
  }

  @Mutation(() => Disk)
  removeDisk(@Args('id', { type: () => Int }) id: number) {
    return this.disksService.remove(id);
  }
}
