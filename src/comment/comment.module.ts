import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "./comment.entity";
import { CommentRepository } from "./comment.repository";
import { CommentResolver } from "./comment.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, CommentRepository])],
  controllers: [],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {
}
