import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixRoute1609573390249 implements MigrationInterface {
    name = 'FixRoute1609573390249';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TYPE "public"."routes_route_type_enum" RENAME TO "routes_route_type_enum_old"`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TYPE "routes_route_type_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '11', '12', '99')`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_type" TYPE "routes_route_type_enum" USING "route_type"::"text"::"routes_route_type_enum"`,
            undefined,
        );
        await queryRunner.query(
            `DROP TYPE "routes_route_type_enum_old"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_color" TYPE character varying(7)`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_text_color" TYPE character varying(7)`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_text_color" TYPE character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_color" TYPE character varying`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TYPE "routes_route_type_enum_old" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '11', '12')`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ALTER COLUMN "route_type" TYPE "routes_route_type_enum_old" USING "route_type"::"text"::"routes_route_type_enum_old"`,
            undefined,
        );
        await queryRunner.query(
            `DROP TYPE "routes_route_type_enum"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TYPE "routes_route_type_enum_old" RENAME TO  "routes_route_type_enum"`,
            undefined,
        );
    }
}
