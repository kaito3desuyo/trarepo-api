import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRouteStation1611481984982 implements MigrationInterface {
    name = 'AddRouteStation1611481984982';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "route_stations" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "route_id" uuid NOT NULL, "station_id" uuid NOT NULL, "station_sequence" integer NOT NULL, "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now(), CONSTRAINT "PK_49e133f1e64dabe8a05da7aa3b4" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "IDX_045f3937bb3354921d12b52e4b" ON "route_stations" ("route_id", "station_id", "station_sequence") `,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD CONSTRAINT "FK_a3d75cc3b968261e75b570061c2" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" ADD CONSTRAINT "FK_475d9f501ba09e33dbc49488663" FOREIGN KEY ("station_id") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP CONSTRAINT "FK_475d9f501ba09e33dbc49488663"`,
        );
        await queryRunner.query(
            `ALTER TABLE "route_stations" DROP CONSTRAINT "FK_a3d75cc3b968261e75b570061c2"`,
        );
        await queryRunner.query(`DROP INDEX "IDX_045f3937bb3354921d12b52e4b"`);
        await queryRunner.query(`DROP TABLE "route_stations"`);
    }
}
