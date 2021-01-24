import { AgencyModel } from '@src/libs/agencies/infrastructure/models/agency.model';
import { values } from 'lodash';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ERouteType } from '../../domain/route-type.enum';
import { RouteStationModel } from './route-stations.model';

@Entity({
    name: 'routes',
})
export class RouteModel {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'uuid' })
    agencyId!: string;

    @Column({ type: 'varchar', nullable: true })
    routeCode!: string | null;

    @Column({ type: 'varchar', nullable: true })
    routeShortName!: string | null;

    @Column({ type: 'varchar', nullable: true })
    routeLongName!: string | null;

    @Column({ type: 'text', nullable: true })
    routeDescription!: string | null;

    @Column({ type: 'int', enum: values(ERouteType) })
    routeType!: ERouteType;

    @Column({ type: 'varchar', nullable: true })
    routeUrl!: string | null;

    @Column({ type: 'varchar', length: 7, nullable: true })
    routeColor!: string | null;

    @Column({ type: 'varchar', length: 7, nullable: true })
    routeTextColor!: string | null;

    @Column({ type: 'int', nullable: true })
    routeSortOrder!: number | null;

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt!: Date;

    @OneToMany(() => RouteStationModel, (routeStation) => routeStation.route)
    routeStations?: RouteStationModel[];

    @ManyToOne(() => AgencyModel, (agency) => agency.routes, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'agency_id' })
    agency?: AgencyModel;
}
