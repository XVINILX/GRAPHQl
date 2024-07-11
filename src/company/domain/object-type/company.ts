import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  CNPJ: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  companyImage: string;

  @Field(() => String, { description: 'User Id' })
  userId: string;
}
