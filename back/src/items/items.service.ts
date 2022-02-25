import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item) private readonly itemRepo: Repository<Item>,
  ) { }

  create(createDiskInput: CreateItemInput) {
    return 'This action adds a new disk';
  }

  async findAll() {
    return await this.itemRepo.find();
  }

  async findOne(id: number) {
    return await this.itemRepo.findOne({ id });
  }

  async getSerial(serial: number) {
    return await this.itemRepo.find({ where: { serial: serial } });
  }

  async findAllTyped(type: string) {
    return await this.itemRepo.find({ where: { itemtype: type } });
  }

  async getExactAmount(amount: number) {
    return await this.itemRepo.find({ take: amount });
  }

  update(id: number, updateDiskInput: UpdateItemInput) {
    return `This action updates a #${id} disk`;
  }
}
