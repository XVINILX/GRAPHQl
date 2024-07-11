import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../../domain/object-type/User';
import { MockUsers } from 'src/user/mock/userMock';
import { Company } from 'src/company/domain/object-type/company';
import { mockCompanies } from 'src/company/mock/mockCompany';

@Resolver((of) => User)
export class UserResolver {
  constructor() {}

  @Query(() => User, { nullable: true })
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const exampleUser = MockUsers.find((user) => user.id === id);

    return exampleUser;
  }

  @Query(() => [User])
  async getUserList() {
    return MockUsers;
  }

  @ResolveField((returns) => Company, { name: 'company', nullable: true })
  getUserCompany(@Parent() user: User) {
    console.log(user);

    return mockCompanies.find((company) => company.userId === user.id);
  }
}
