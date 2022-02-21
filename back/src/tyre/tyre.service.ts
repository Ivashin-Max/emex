import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TyreCreateDTO } from './dto/create-tyre.input';
import { TyreUpdateDTO } from './dto/update-tyre.input';
import { Tyre } from './entities/tyre.entity';

@Injectable()
export class TyreService {
  constructor(
    @InjectRepository(Tyre) private readonly tyreRepo: Repository<Tyre>,
  ) { }
  async findAll() {
    return await this.tyreRepo.find();
  }

  async getOneTyre(id: number) {
    return await this.tyreRepo.findOne({ id });
  }

  async getSerial(serial: string) {
    return await this.tyreRepo.find({ where: { serial: serial } });
  }

  async getExactAmount(amount: number) {
    return await this.tyreRepo.find({ take: amount });
  }

  async createTyre(tyre: TyreCreateDTO) {
    const currentTyre = this.tyreRepo.create(tyre);
    return this.tyreRepo.save(currentTyre);
  }

  async updateTyre(updateTyreDTO: TyreUpdateDTO) {
    await this.tyreRepo.update({ id: updateTyreDTO.id }, { ...updateTyreDTO });
    return await this.getOneTyre(updateTyreDTO.id);
  }
}
