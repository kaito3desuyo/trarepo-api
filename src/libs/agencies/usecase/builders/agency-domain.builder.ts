import { BaseAgencyDto } from '../dto/base-agency.dto';
import { Agency } from '../../domain/agency';
import { AgencyId } from '../../domain/agency-id';
import { UniqueEntityID } from '../../../../core/classes/unique-entity-id';

export class AgencyDomainBuilder implements BaseAgencyDto {
    agencyId: string;
    agencyNumber: string;
    agencyOfficialName: string;
    agencyName: string;
    agencyPhone: string;
    agencyUrl: string;
    agencyFareUrl: string;

    constructor(dto: BaseAgencyDto) {
        this.agencyId = dto.agencyId;
        this.agencyNumber = dto.agencyNumber;
        this.agencyOfficialName = dto.agencyOfficialName;
        this.agencyName = dto.agencyName;
        this.agencyPhone = dto.agencyPhone;
        this.agencyUrl = dto.agencyUrl;
        this.agencyFareUrl = dto.agencyFareUrl;
    }

    build(): Agency {
        return Agency.create({
            agencyId: AgencyId.create(new UniqueEntityID(this.agencyId)),
            agencyNumber: this.agencyNumber,
            agencyOfficialName: this.agencyOfficialName,
            agencyName: this.agencyName,
            agencyPhone: this.agencyPhone,
            agencyUrl: this.agencyUrl,
            agencyFareUrl: this.agencyFareUrl,
        });
    }
}
