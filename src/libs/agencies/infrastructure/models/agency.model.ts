import { RouteModel } from '@src/libs/routes/infrastructure/models/route.model';
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({
    name: 'agencies',
})
export class AgencyModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Index({ unique: true })
    agencyNumber: string;

    @Column()
    agencyOfficialName: string;

    @Column()
    agencyName: string;

    @Column()
    agencyPhone: string;

    @Column()
    agencyUrl: string;

    @Column()
    agencyFareUrl: string;

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt: Date;

    @OneToMany(() => RouteModel, (route) => route.agency)
    routes?: RouteModel[];
}
