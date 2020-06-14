import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({
    name: 'stations',
})
export class StationModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    stationName: string;

    @Column('varchar', { nullable: true })
    stationSubName?: string;

    @Column('smallint')
    stationType: number;

    @Column('text', { nullable: true })
    stationDescription?: string;

    @Column('geometry', {
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    stationLatLng?: {
        type: string;
        coordinates: number[];
    };

    @Column('varchar', { nullable: true })
    stationUrl?: string;

    // wheelchair_boarding

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt: Date;
}
