import { AgencyId } from '../../domain/agency-id';
import { AgencyModel } from '../models/agency.model';
import { IAgencyNotification } from '../../domain/agency.interface';

export class AgencyModelBuilder implements IAgencyNotification {
    private _agencyId!: AgencyId;
    private _agencyNumber!: string;
    private _agencyOfficialName!: string;
    private _agencyName!: string;
    private _agencyPhone!: string;
    private _agencyUrl!: string;
    private _agencyFareUrl!: string;

    set agencyId(agencyId: AgencyId) {
        this._agencyId = agencyId;
    }

    set agencyNumber(agencyNumber: string) {
        this._agencyNumber = agencyNumber;
    }

    set agencyOfficialName(agencyOfficialName: string) {
        this._agencyOfficialName = agencyOfficialName;
    }

    set agencyName(agencyName: string) {
        this._agencyName = agencyName;
    }

    set agencyPhone(agencyPhone: string) {
        this._agencyPhone = agencyPhone;
    }

    set agencyUrl(agencyUrl: string) {
        this._agencyUrl = agencyUrl;
    }

    set agencyFareUrl(agencyFareUrl: string) {
        this._agencyFareUrl = agencyFareUrl;
    }

    build(): AgencyModel {
        const model = new AgencyModel();
        model.id = this._agencyId.id.toString();
        model.agencyNumber = this._agencyNumber;
        model.agencyOfficialName = this._agencyOfficialName;
        model.agencyName = this._agencyName;
        model.agencyPhone = this._agencyPhone;
        model.agencyUrl = this._agencyUrl;
        model.agencyFareUrl = this._agencyFareUrl;
        return model;
    }
}
