import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { CommentDto, CommentInput } from "./comment.dto";
import { CommentEntity } from "./comment.entity";

@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {
  }

  @Query(() => [CommentDto])
  async comments(): Promise<CommentEntity[]> {
    return this.commentService.findAll();
  }

  @Mutation(()=> CommentDto)
  async createComment(@Args('comment') comment: CommentInput): Promise<CommentEntity> {
    return this.commentService.create(comment);
  }
}
