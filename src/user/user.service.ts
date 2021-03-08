import { Injectable } from "@nestjs/common";
import { UserInput } from "./user.dto";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
  ) {
  }

  public async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find({
      relations: ["comments"],
    });
  }

  public async findById(id: number): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne(id, {
      relations: ["comments"],
    });
  }

  public async create(userInput: UserInput): Promise<UserEntity> {
    const user = plainToClass(UserEntity, userInput);

    return this.usersRepository.save(user);
  }
}
