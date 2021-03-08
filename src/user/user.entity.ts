import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { CommentEntity } from "../comment/comment.entity";

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public age: string;

  @OneToMany(() => CommentEntity, comment => comment.user)
  public comments: CommentEntity[];
}
