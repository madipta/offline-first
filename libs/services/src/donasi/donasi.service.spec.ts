import { Test, TestingModule } from '@nestjs/testing';
import { DonasiService } from './donasi.service';

describe('DonasiService', () => {
  let service: DonasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonasiService],
    }).compile();

    service = module.get<DonasiService>(DonasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
