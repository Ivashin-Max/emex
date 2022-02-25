import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('items')
@Entity('items')
export class Item {
  @Field(() => ID)
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Field()
  @Column()
  amount: number;
  @Field()
  @Column()
  serial: number;
  @Field()
  @Column()
  price: number;
  @Field()
  @Column()
  brand: string;
  @Field()
  @Column()
  name: string;
  @Field()
  @Column()
  type: string;
  @Field()
  @Column()
  special: string;
  @Field()
  @Column()
  itemtype: string;
}
