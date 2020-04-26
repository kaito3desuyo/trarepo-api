import {
    IsNumberString,
    IsPhoneNumber,
    IsString,
    IsUrl,
    IsUUID,
} from 'class-validator';
import { BaseAgencyDto } from './base-agency.dto';

export class ValidatableAgencyDto extends BaseAgencyDto {
    @IsUUID()
    agencyId: string;

    @IsNumberString()
    agencyNumber: string;

    @IsString()
    agencyOfficialName: string;

    @IsString()
    agencyName: string;

    @IsPhoneNumber('JP')
    agencyPhone: string;

    @IsUrl()
    agencyUrl: string;

    @IsUrl()
    agencyFareUrl: string;
}
