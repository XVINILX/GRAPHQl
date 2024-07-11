import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Company } from 'src/company/domain/object-type/company';

@ObjectType({ description: 'users' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(() => Int)
  age: number;

  @Field()
  createdDate: Date;

  @Field({ nullable: true })
  company?: Company;
}
