import { AgencyId } from './agency-id';
import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';

interface AgencyProps {
    agencyId: AgencyId;
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
}

export class Agency extends AggregateRoot<AgencyProps> {
    private constructor(props: AgencyProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: AgencyProps, id?: UniqueEntityID) {
        return new Agency(props, id);
    }
}
