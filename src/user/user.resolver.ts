import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDto, UserInput } from "./user.dto";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {
  }

  @Query(() => [UserDto])
  async users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Query(() => UserDto)
  async user(@Args("id", { type: () => Int }) id: number): Promise<UserEntity | undefined> {
    return this.userService.findById(id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args("user") user: UserInput): Promise<UserEntity> {
    return this.userService.create(user);
  }

}
