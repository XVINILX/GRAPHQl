import { Module } from '@nestjs/common';
import { UserResolver } from '../gql/resolver/user.resolver';

@Module({
  imports: [],

  providers: [UserResolver],
})
export class UserModule {}
