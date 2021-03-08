import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateComments1613233055382 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "comments",
      columns: [
        {
          name: "id",
          type: "int",
          isGenerated: true,
          generationStrategy: "increment",
          isPrimary: true,
        }, {
          name: "userId",
          type: "int",
          isNullable: false,
        }, {
          name: "description",
          type: "varchar",
          length: "255",
        }, {
          name: "parentId",
          type: "int",
          isNullable: true,
        }, {
          name: "mpath",
          type: "varchar",
          length: "255",
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(table);

    await queryRunner.createForeignKey("comments", new TableForeignKey({
      columnNames: ["user_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "CASCADE",
    }));
  }


  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("comments");
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") !== -1);

    await queryRunner.dropForeignKey("comments", foreignKey);
    await queryRunner.dropTable("comments");
  }
}
