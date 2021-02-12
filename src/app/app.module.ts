import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      debug: true,
      playground: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
