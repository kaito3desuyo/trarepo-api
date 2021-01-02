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
    @PrimaryGeneratedColumn({ type: 'uuid' })
    id!: string;

    @Column({ type: 'varchar' })
    @Index({ unique: true })
    agencyNumber!: string;

    @Column({ type: 'varchar' })
    agencyOfficialName!: string;

    @Column({ type: 'varchar' })
    agencyName!: string;

    @Column({ type: 'varchar' })
    agencyPhone!: string;

    @Column({ type: 'varchar' })
    agencyUrl!: string;

    @Column({ type: 'varchar' })
    agencyFareUrl!: string;

    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedAt!: Date;

    @OneToMany(() => RouteModel, (route) => route.agency)
    routes?: RouteModel[];
}
