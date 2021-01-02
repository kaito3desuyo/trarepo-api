import { UniqueEntityID } from '../../../../core/classes/unique-entity-id';
import { Agency } from '../../domain/agency';
import { IAgencyProps } from '../../domain/agency.interface';
import { BaseAgencyDto } from '../dtos/base-agency.dto';

export class AgencyDomainBuilder implements BaseAgencyDto {
    agencyId?: string;
    agencyNumber?: string;
    agencyOfficialName?: string;
    agencyName?: string;
    agencyPhone?: string;
    agencyUrl?: string;
    agencyFareUrl?: string;

    private get _agencyNumber(): string {
        return this.agencyNumber ?? '';
    }

    private get _agencyOfficialName(): string {
        return this.agencyOfficialName ?? '';
    }

    private get _agencyName(): string {
        return this.agencyName ?? '';
    }

    private get _agencyPhone(): string {
        return this.agencyPhone ?? '';
    }

    private get _agencyUrl(): string {
        return this.agencyUrl ?? '';
    }

    private get _agencyFareUrl(): string {
        return this.agencyFareUrl ?? '';
    }

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
        return Agency.create(
            {
                agencyNumber: this._agencyNumber,
                agencyOfficialName: this._agencyOfficialName,
                agencyName: this._agencyName,
                agencyPhone: this._agencyPhone,
                agencyUrl: this._agencyUrl,
                agencyFareUrl: this._agencyFareUrl,
            },
            new UniqueEntityID(this.agencyId),
        );
    }

    getProps(): Partial<IAgencyProps> {
        const obj: Partial<IAgencyProps> = {};
        if (this.agencyNumber) {
            obj.agencyNumber = this._agencyNumber;
        }
        if (this.agencyOfficialName) {
            obj.agencyOfficialName = this._agencyOfficialName;
        }
        if (this.agencyName) {
            obj.agencyName = this._agencyName;
        }
        if (this.agencyPhone) {
            obj.agencyPhone = this._agencyPhone;
        }
        if (this.agencyUrl) {
            obj.agencyUrl = this._agencyUrl;
        }
        if (this.agencyFareUrl) {
            obj.agencyFareUrl = this._agencyFareUrl;
        }
        return obj;
    }
}
