import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class CommentInput {
  @Field(() => String)
  public description: string;

  @Field(() => Int)
  public parentId?: number;

  @Field(() => Int)
  public userId?: number;
}

@ObjectType()
export class CommentDto {
  @Field(() => ID)
  public id?: number;

  @Field(type => String)
  public description: string;

  @Field(type => Number)
  public userId: number;

  @Field(type => Number)
  public parentId: number;

  @Field(() => [CommentDto], { nullable: true })
  public children?: CommentDto[];
}
