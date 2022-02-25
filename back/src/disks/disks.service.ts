import { Injectable } from '@nestjs/common';
import { CreateDiskInput } from './dto/create-disk.input';
import { UpdateDiskInput } from './dto/update-disk.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disk } from './entities/disk.entity';

@Injectable()
export class DisksService {
  constructor(
    @InjectRepository(Disk) private readonly diskRepo: Repository<Disk>,
  ) { }

  create(createDiskInput: CreateDiskInput) {
    return 'This action adds a new disk';
  }

  async findAllDisks() {
    return await this.diskRepo.find();
  }

  async getOneDisk(id: number) {
    return await this.diskRepo.findOne({ id });
  }

  async getSerialDisk(serial: number) {
    return await this.diskRepo.find({ where: { serial: serial } });
  }

  async getExactAmountDisk(amount: number) {
    return await this.diskRepo.find({ take: amount });
  }

  update(id: number, updateDiskInput: UpdateDiskInput) {
    return `This action updates a #${id} disk`;
  }

}
