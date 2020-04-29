import { AgencyModel } from './../../infrastructure/models/agency.model';
import { AgencyDetailsDto } from '../../usecase/dtos/agency-details.dto';

export class AgencyDtoBuilder implements AgencyModel {
    id: string;
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(model: AgencyModel) {
        this.id = model.id;
        this.agencyNumber = model.agencyNumber;
        this.agencyOfficialName = model.agencyOfficialName;
        this.agencyName = model.agencyName;
        this.agencyPhone = model.agencyPhone;
        this.agencyUrl = model.agencyUrl;
        this.agencyFareUrl = model.agencyFareUrl;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    build(): AgencyDetailsDto {
        return {
            agencyId: this.id,
            agencyNumber: this.agencyNumber,
            agencyOfficialName: this.agencyOfficialName,
            agencyName: this.agencyName,
            agencyPhone: this.agencyPhone,
            agencyUrl: this.agencyUrl,
            agencyFareUrl: this.agencyFareUrl,
        };
    }
}
