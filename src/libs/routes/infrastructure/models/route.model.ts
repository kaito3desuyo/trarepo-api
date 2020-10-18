import { AgencyModel } from '@src/libs/agencies/infrastructure/models/agency.model';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ERouteType } from '../../domain/route-type.enum';

@Entity({
    name: 'routes',
})
export class RouteModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    agencyId: string;

    @Column({ nullable: true })
    routeCode: string;

    @Column({ nullable: true })
    routeShortName: string;

    @Column({ nullable: true })
    routeLongName: string;

    @Column({ type: 'text', nullable: true })
    routeDescription: string;

    @Column({ type: 'enum', enum: ERouteType })
    routeType: ERouteType;

    @Column({ nullable: true })
    routeUrl: string;

    @Column({ nullable: true })
    routeColor: string;

    @Column({ nullable: true })
    routeTextColor: string;

    @Column({ nullable: true })
    routeSortOrder: number;

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt: Date;

    @ManyToOne(() => AgencyModel, (agency) => agency.routes, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'agency_id' })
    agency?: AgencyModel;
}
