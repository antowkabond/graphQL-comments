import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1613233055380 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "bigint",
          isNullable: false,
          isGenerated: true,
          generationStrategy: "increment",
          isPrimary: true,
        }, {
          name: "name",
          type: "varchar",
          length: "255",
        }, {
          name: "age",
          type: "bigint",
        },
      ],
    });

    await queryRunner.createTable(table);
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
