import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
  @Field(() => ID)
  public id?: number;

  @Field()
  public name: string;

  @Field(() => Int)
  public age: number;
}

@InputType()
export class UserInput {
  @Field()
  public name: string;

  @Field(() => Int)
  public age: number;
}

