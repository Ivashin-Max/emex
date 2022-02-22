import { Test, TestingModule } from '@nestjs/testing';
import { DisksResolver } from './disks.resolver';
import { DisksService } from './disks.service';

describe('DisksResolver', () => {
  let resolver: DisksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisksResolver, DisksService],
    }).compile();

    resolver = module.get<DisksResolver>(DisksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
