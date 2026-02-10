import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostsTable1770767520353 implements MigrationInterface {
  name = 'PostsTable1770767520353';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" SERIAL NOT NULL, "short_name" text NOT NULL, "full_name" text, "keywords" character varying array, "url" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_ca7320129c06fdcdbf8b1556e3d" UNIQUE ("short_name"), CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
