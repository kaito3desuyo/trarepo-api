import { AgencyId } from './agency-id';

export interface IAgencyProps {
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
}

export type IAgencyUpdateDetailsProps = Partial<
    Pick<
        IAgencyProps,
        | 'agencyOfficialName'
        | 'agencyName'
        | 'agencyPhone'
        | 'agencyUrl'
        | 'agencyFareUrl'
    >
>;

export interface IAgencyNotification extends IAgencyProps {
    agencyId: AgencyId;
}
