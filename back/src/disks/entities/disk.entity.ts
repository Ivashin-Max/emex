import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('disks')
@Entity('disks')
export class Disk {
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
  width: string;
  @Field()
  @Column()
  ports: string;
  @Field()
  @Column()
  radius: string;
  @Field()
  @Column()
  type: string;
}

