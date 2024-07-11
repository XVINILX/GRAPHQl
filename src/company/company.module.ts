import { Module } from '@nestjs/common';

import { CompanyResolver } from './gql/resolver/company.resolver';
import { CompanyService } from './service/company.service';

@Module({
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
