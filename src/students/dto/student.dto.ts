import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentDto {
  @Field()
  id: number;

  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
