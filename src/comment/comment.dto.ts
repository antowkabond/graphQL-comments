import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CommentDto {
  @Field(() => ID)
  readonly id?: number;

  @Field(type => String)
  readonly text?: string;
}
