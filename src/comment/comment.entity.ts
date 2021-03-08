import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent, ManyToOne,
} from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity("comments")
@Tree("materialized-path")
export class CommentEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public description: string;

  @Column({name: "userId"})
  public userId: string;

  @TreeChildren()
  children: CommentEntity[];

  @TreeParent()
  parent: CommentEntity;

  @ManyToOne(() => UserEntity, user => user.comments)
  public user: UserEntity;
}
