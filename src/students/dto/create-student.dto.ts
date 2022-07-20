import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentDto {
  @Field()
  name: string;

  @Field()
  key: string;
}
