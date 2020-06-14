import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAgency1587288381923 implements MigrationInterface {
    name = 'AddAgency1587288381923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agencies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "agency_number" character varying NOT NULL, "agency_official_name" character varying NOT NULL, "agency_name" character varying NOT NULL, "agency_phone" character varying NOT NULL, "agency_url" character varying NOT NULL, "agency_fare_url" character varying NOT NULL, "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now(), CONSTRAINT "PK_8ab1f1f53f56c8255b0d7e68b28" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_67626dfbd5960c9f5125f13c76" ON "agencies" ("agency_number") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_67626dfbd5960c9f5125f13c76"`, undefined);
        await queryRunner.query(`DROP TABLE "agencies"`, undefined);
    }

}
