import { ApiProperty } from '@nestjs/swagger';
import { BaseAgencyDto } from './base-agency.dto';

export class AgencyDetailsDto extends BaseAgencyDto {
    @ApiProperty({ type: 'string' })
    agencyId!: string;

    @ApiProperty({ type: 'string' })
    agencyNumber!: string;

    @ApiProperty({ type: 'string' })
    agencyOfficialName!: string;

    @ApiProperty({ type: 'string' })
    agencyName!: string;

    @ApiProperty({ type: 'string' })
    agencyPhone!: string;

    @ApiProperty({ type: 'string' })
    agencyUrl!: string;

    @ApiProperty({ type: 'string' })
    agencyFareUrl!: string;
}
