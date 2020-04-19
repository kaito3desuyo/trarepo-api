import { AgencyId } from '../../domain/agency-id';
import { AgencyModel } from '../models/agency.model';

export interface IAgencyNotification {
    agencyId: AgencyId;
    // agencyNumber: string;
    // agencyOfficialName: string;
    // agencyName: string;
    // agencyPhone: string;
    // agencyUrl: string;
    // agencyFareUrl: string;
}

export class AgencyModelBuilder implements IAgencyNotification {
    private _agencyId: AgencyId;
    private _agencyNumber: string;

    set agencyId(agencyId: AgencyId) {
        this._agencyId = agencyId;
    }

    build(): AgencyModel {
        const model = new AgencyModel();
        model.id = this._agencyId.id.toString();
        return model;
    }
}
