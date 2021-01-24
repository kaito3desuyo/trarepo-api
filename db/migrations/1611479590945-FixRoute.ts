import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixRoute1611479590945 implements MigrationInterface {
    name = 'FixRoute1611479590945';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "routes" DROP COLUMN "route_type"`,
        );
        await queryRunner.query(`DROP TYPE "public"."routes_route_type_enum"`);
        await queryRunner.query(
            `ALTER TABLE "routes" ADD "route_type" integer NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "routes" DROP COLUMN "route_type"`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."routes_route_type_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '11', '12', '99')`,
        );
        await queryRunner.query(
            `ALTER TABLE "routes" ADD "route_type" "routes_route_type_enum" NOT NULL`,
        );
    }
}
