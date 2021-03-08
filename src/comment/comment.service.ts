import { Injectable } from "@nestjs/common";
import { CommentInput } from "./comment.dto";
import { CommentRepository } from "./comment.repository";
import { plainToClass } from "class-transformer";
import { CommentEntity } from "./comment.entity";
import { Connection, DeleteResult } from "typeorm";
import { TreeRepository } from "typeorm/repository/TreeRepository";

@Injectable()
export class CommentService {
  private treeCommentRepository: TreeRepository<CommentEntity>;

  constructor(private commentRepository: CommentRepository,
              private connection: Connection) {
    this.treeCommentRepository = this.connection.manager.getTreeRepository(CommentEntity);
  }

  public async create(createCommentDto: CommentInput): Promise<CommentEntity> {
    const comment: CommentEntity = plainToClass(CommentEntity, createCommentDto);
    const parent = await this.commentRepository.findOne({ id: createCommentDto.parentId });

    comment.parent = parent;

    return this.commentRepository.save(comment);
  }

  public async findAll(): Promise<CommentEntity[]> {
    return this.treeCommentRepository.findTrees();
  }

  public async findChildrenRecursive(parentId: number): Promise<CommentEntity[]> {
    return this.commentRepository.findRecursive(parentId);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.commentRepository.delete(id);
  }
}
