import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
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

    @CreateDateColumn({ precision: 3 })
    createdAt: Date;

    @UpdateDateColumn({ precision: 3 })
    updatedAt: Date;
}