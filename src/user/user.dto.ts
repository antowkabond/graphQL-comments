import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { CommentDto } from "../comment/comment.dto";

@ObjectType()
export class UserDto {
  @Field(() => ID)
  readonly id?: number;

  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field(() => [CommentDto], {nullable: true})
  readonly comments?: CommentDto[];
}

@InputType()
export class UserInput {
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly age: number;
}
