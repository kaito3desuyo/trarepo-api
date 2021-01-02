import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ValidatableAgencyDto } from './validatable-agency.dto';

export class UpdateAgencyDto extends ValidatableAgencyDto {
    @IsOptional()
    @Exclude()
    agencyId?: string;

    @IsOptional()
    @Exclude()
    agencyNumber?: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    agencyOfficialName?: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    agencyName?: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    agencyPhone?: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    agencyUrl?: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    agencyFareUrl?: string;
}
