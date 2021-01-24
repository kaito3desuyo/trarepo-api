import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixRouteStation1611483856491 implements MigrationInterface {
    name = 'FixRouteStation1611483856491';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP COLUMN "created_at"`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD "created_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now()`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP COLUMN "updated_at"`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD "updated_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT now()`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP COLUMN "updated_at"`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now()`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP COLUMN "created_at"`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD "created_at" TIMESTAMP(3) NOT NULL DEFAULT now()`,
        );
    }
}
