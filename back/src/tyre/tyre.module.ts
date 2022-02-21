import { Module } from '@nestjs/common';
import { TyreService } from './tyre.service';
import { TyreResolver } from './tyre.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tyre } from './entities/tyre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tyre])],
  providers: [TyreService, TyreResolver]
})
export class TyreModule { }
