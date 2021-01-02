import { AgencyId } from './agency-id';

export interface IAgencyProps {
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
}

export interface IAgencyNotification extends IAgencyProps {
    agencyId: AgencyId;
}
