import { Module } from '@nestjs/common';
import { DisksService } from './disks.service';
import { DisksResolver } from './disks.resolver';

@Module({
  providers: [DisksResolver, DisksService]
})
export class DisksModule {}
