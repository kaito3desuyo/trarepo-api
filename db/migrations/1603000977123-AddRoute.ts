import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoute1603000977123 implements MigrationInterface {
    name = 'AddRoute1603000977123';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TYPE "routes_route_type_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '11', '12')`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "routes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "agency_id" uuid NOT NULL, "route_code" character varying, "route_short_name" character varying, "route_long_name" character varying, "route_description" text, "route_type" "routes_route_type_enum" NOT NULL, "route_url" character varying, "route_color" character varying, "route_text_color" character varying, "route_sort_order" integer, "created_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_76100511cdfa1d013c859f01d8b" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "routes"`, undefined);
        await queryRunner.query(
            `DROP TYPE "routes_route_type_enum"`,
            undefined,
        );
    }
}
