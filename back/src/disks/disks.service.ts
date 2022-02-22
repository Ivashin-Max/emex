import { Injectable } from '@nestjs/common';
import { CreateDiskInput } from './dto/create-disk.input';
import { UpdateDiskInput } from './dto/update-disk.input';

@Injectable()
export class DisksService {
  create(createDiskInput: CreateDiskInput) {
    return 'This action adds a new disk';
  }

  findAll() {
    return `This action returns all disks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disk`;
  }

  update(id: number, updateDiskInput: UpdateDiskInput) {
    return `This action updates a #${id} disk`;
  }

  remove(id: number) {
    return `This action removes a #${id} disk`;
  }
}
