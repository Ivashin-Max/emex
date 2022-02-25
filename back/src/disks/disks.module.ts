import { Module } from '@nestjs/common';
import { DisksService } from './disks.service';
import { DisksResolver } from './disks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disk } from './entities/disk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disk])],
  providers: [DisksResolver, DisksService]
})
export class DisksModule { }
