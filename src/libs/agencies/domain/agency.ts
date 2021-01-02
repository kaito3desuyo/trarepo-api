import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { AgencyId } from './agency-id';
import {
    IAgencyProps,
    IAgencyNotification,
    IAgencyUpdateDetailsProps,
} from './agency.interface';

export class Agency extends AggregateRoot<IAgencyProps> {
    private constructor(props: IAgencyProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: IAgencyProps, id?: UniqueEntityID): Agency {
        return new Agency(props, id);
    }

    updateDetails(props: IAgencyUpdateDetailsProps): void {
        if (props.agencyOfficialName) {
            this.props.agencyOfficialName = props.agencyOfficialName;
        }
        if (props.agencyName) {
            this.props.agencyName = props.agencyName;
        }
        if (props.agencyPhone) {
            this.props.agencyPhone = props.agencyPhone;
        }
        if (props.agencyUrl) {
            this.props.agencyUrl = props.agencyUrl;
        }
        if (props.agencyFareUrl) {
            this.props.agencyFareUrl = props.agencyFareUrl;
        }
    }

    public notify(notifier: IAgencyNotification): void {
        notifier.agencyId = AgencyId.create(this.id);
        notifier.agencyNumber = this.props.agencyNumber;
        notifier.agencyOfficialName = this.props.agencyOfficialName;
        notifier.agencyName = this.props.agencyName;
        notifier.agencyPhone = this.props.agencyPhone;
        notifier.agencyUrl = this.props.agencyUrl;
        notifier.agencyFareUrl = this.props.agencyFareUrl;
    }
}
