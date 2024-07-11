import { Test, TestingModule } from '@nestjs/testing';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from 'src/company/service/company.service';

describe('CompanyResolver', () => {
  let resolver: CompanyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyResolver, CompanyService],
    }).compile();

    resolver = module.get<CompanyResolver>(CompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
