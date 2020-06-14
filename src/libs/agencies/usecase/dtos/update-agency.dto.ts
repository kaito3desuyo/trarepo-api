import { ApiProperty } from '@nestjs/swagger';
import { ValidatableAgencyDto } from './validatable-agency.dto';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UpdateAgencyDto extends ValidatableAgencyDto {
    @IsOptional()
    @Exclude()
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
