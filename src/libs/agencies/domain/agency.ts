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

    public notify(notifier: IAgencyNotification) {
        notifier.agencyId = this.props.agencyId;
        notifier.agencyNumber = this.props.agencyNumber;
        notifier.agencyOfficialName = this.props.agencyOfficialName;
        notifier.agencyName = this.props.agencyName;
        notifier.agencyPhone = this.props.agencyPhone;
        notifier.agencyUrl = this.props.agencyUrl;
        notifier.agencyFareUrl = this.props.agencyFareUrl;
    }
}
