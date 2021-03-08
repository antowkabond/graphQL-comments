import { EntityRepository, getManager, Repository } from "typeorm";
import { CommentEntity } from "./comment.entity";

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  public async findRecursive(parentId: number) {
    const entityManager = getManager();
    return entityManager.query(`
      WITH RECURSIVE recursetree AS
        (SELECT *
         FROM comments
         WHERE comments."parentId" = ${parentId}
         UNION
         SELECT c.*
         FROM comments c
         JOIN recursetree rt ON rt.id = c."parentId")
      SELECT *
      FROM recursetree;
    `);

  }
}
