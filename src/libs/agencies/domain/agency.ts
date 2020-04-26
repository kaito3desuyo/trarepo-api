import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { IAgencyProps, IAgencyNotification } from './agency.interface';

export class Agency extends AggregateRoot<IAgencyProps> {
    private constructor(props: IAgencyProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: IAgencyProps, id?: UniqueEntityID) {
        return new Agency(props, id);
    }

    public notify(agency: IAgencyNotification) {
        agency.agencyId = this.props.agencyId;
    }
}
