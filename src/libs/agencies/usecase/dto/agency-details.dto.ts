import { ApiProperty } from '@nestjs/swagger';
import { BaseAgencyDto } from './base-agency.dto';

export class AgencyDetailsDto extends BaseAgencyDto {
    @ApiProperty()
    agencyId: string;

    @ApiProperty()
    agencyNumber: string;

    @ApiProperty()
    agencyOfficialName: string;

    @ApiProperty()
    agencyName: string;

    @ApiProperty()
    agencyPhone: string;

    @ApiProperty()
    agencyUrl: string;

    @ApiProperty()
    agencyFareUrl: string;
}
