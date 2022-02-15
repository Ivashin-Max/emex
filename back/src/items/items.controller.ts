import { Controller, Get, Param } from '@nestjs/common';

export interface Iitem {
  id: number;
  brand: string;
  name: string;
  price: number;
}

@Controller('items')
export class StudentsController {
  public items: Iitem[] = [
    {
      id: 1,
      brand: 'string',
      name: 'string',
      price: 123,
    },
    {
      id: 2,
      brand: 'string',
      name: 'string',
      price: 15,
    },
  ];
  @Get()
  getAll() {
    return this.items;
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }
}
