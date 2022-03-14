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

  async create(createItemInput: CreateItemInput) {
    return await this.itemRepo.save(createItemInput)
  }

  async updateOne(updateItemInput: UpdateItemInput) {
    await this.itemRepo.update(
      { id: updateItemInput.id },
      { ...updateItemInput },
    );
    return await this.findOne(updateItemInput.id);
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

  async findIds(ids: UpdateItemInput[]) {
    const neededItems = [];
    for (let i = 0; i < ids.length; i++) {
      const element = await this.itemRepo.findOne(ids[i].id);
      neededItems.push(element);
    }
    return neededItems;
  }

  async getExactAmountTyped(amount: number, type: string) {
    return await this.itemRepo.find({
      take: amount,
      where: { itemtype: type },
    });
  }

  async updateMultiple(updateItemInput: UpdateItemInput[]) {
    for (let i = 0; i < updateItemInput.length; i++) {
      const element = updateItemInput[i];
      await this.updateOne(element);
    }
    return await this.findIds(updateItemInput);
  }
}
