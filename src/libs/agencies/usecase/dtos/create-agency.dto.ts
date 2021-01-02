import { ValidatableAgencyDto } from './validatable-agency.dto';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAgencyDto extends ValidatableAgencyDto {
    @IsOptional()
    @Exclude()
    agencyId?: string;

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
