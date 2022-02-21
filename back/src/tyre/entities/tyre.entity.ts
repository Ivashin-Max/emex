import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('tyres')
@Entity('tyres')
export class Tyre {
  @Field(() => ID)
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Field()
  @Column()
  amount: string;
  @Field()
  @Column()
  serial: string;
  @Field()
  @Column()
  brand: string;
  @Field()
  @Column()
  name: string;
  @Field()
  @Column()
  width: string;
  @Field()
  @Column()
  height: string;
  @Field()
  @Column()
  radius: string;
  @Field()
  @Column()
  season: string;
}
