import { CreateStudentDto } from './create-student.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @Field(() => String)
  id: string;
}
