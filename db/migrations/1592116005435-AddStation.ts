import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStation1592116005435 implements MigrationInterface {
    name = 'AddStation1592116005435';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "stations" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "station_name" character varying NOT NULL, "station_sub_name" character varying, "station_type" smallint NOT NULL, "station_description" text, "station_lat_lng" geometry(Point,4326), "station_url" character varying, "created_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stations"`, undefined);
    }
}
