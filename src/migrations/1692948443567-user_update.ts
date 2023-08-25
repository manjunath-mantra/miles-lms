import { MigrationInterface, QueryRunner } from "typeorm";

export class UserUpdate1692948443567 implements MigrationInterface {
    name = 'UserUpdate1692948443567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "confirm_password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "confirm_password"`);
    }

}
