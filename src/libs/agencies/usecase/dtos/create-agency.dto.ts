import { ValidatableAgencyDto } from './validatable-agency.dto';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAgencyDto extends ValidatableAgencyDto {
    @IsOptional()
    @Exclude()
    agencyId!: string;

    @ApiProperty()
    agencyNumber!: string;

    @ApiProperty()
    agencyOfficialName!: string;

    @ApiProperty()
    agencyName!: string;

    @ApiProperty()
    agencyPhone!: string;

    @ApiProperty()
    agencyUrl!: string;

    @ApiProperty()
    agencyFareUrl!: string;
}
