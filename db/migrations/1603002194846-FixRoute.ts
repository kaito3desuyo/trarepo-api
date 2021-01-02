import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixRoute1603002194846 implements MigrationInterface {
    name = 'FixRoute1603002194846';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "routes" ADD CONSTRAINT "FK_7642ed6f5276084f2e463793c29" FOREIGN KEY ("agency_id") REFERENCES "agencies"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "routes" DROP CONSTRAINT "FK_7642ed6f5276084f2e463793c29"`,
            undefined,
        );
    }
}
