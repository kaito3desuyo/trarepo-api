import { AgencyId } from './agency-id';

export interface IAgencyProps {
    agencyId: AgencyId;
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
}

export interface IAgencyNotification {
    agencyId: AgencyId;
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
}
