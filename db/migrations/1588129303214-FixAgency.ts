import {MigrationInterface, QueryRunner} from "typeorm";

export class FixAgency1588129303214 implements MigrationInterface {
    name = 'FixAgency1588129303214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agencies" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" ADD "created_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" DROP COLUMN "updated_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" ADD "updated_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agencies" DROP COLUMN "updated_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" ADD "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "agencies" ADD "created_at" TIMESTAMP(3) NOT NULL DEFAULT now()`, undefined);
    }

}
