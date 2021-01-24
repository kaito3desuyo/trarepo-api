import { RouteStationModel } from '@src/libs/routes/infrastructure/models/route-stations.model';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

@Entity({
    name: 'stations',
})
export class StationModel {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar')
    stationName!: string;

    @Column('varchar', { nullable: true })
    stationSubName!: string | null;

    @Column('smallint')
    stationType!: number;

    @Column('text', { nullable: true })
    stationDescription!: string | null;

    @Column('geometry', {
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    stationLatLng!: {
        type: string;
        coordinates: string[];
    } | null;

    @Column('varchar', { nullable: true })
    stationUrl!: string | null;

    // wheelchair_boarding

    // wheelchair_boarding

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt!: Date;

    @OneToMany(() => RouteStationModel, (routeStation) => routeStation.station)
    routeStations?: RouteStationModel[];
}
