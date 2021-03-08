import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { UserModule } from "../user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentModule } from "../comment/comment.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
