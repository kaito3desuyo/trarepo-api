import { StationModel } from '@src/libs/stations/infrastructure/models/station.model';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { RouteModel } from './route.model';

@Entity({
    name: 'route_stations',
})
@Index(['routeId', 'stationId', 'stationSequence'], { unique: true })
export class RouteStationModel {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'uuid' })
    routeId!: string;

    @Column({ type: 'uuid' })
    stationId!: string;

    @Column({ type: 'int' })
    stationSequence!: number;

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    readonly createdAt?: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    readonly updatedAt?: Date;

    @ManyToOne(() => RouteModel, (route) => route.routeStations, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'route_id' })
    route?: RouteModel;

    @ManyToOne(() => StationModel, (station) => station, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'station_id' })
    station?: StationModel;
}
