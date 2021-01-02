import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ValidatableStationDto } from './validatable-station.dto';

export class UpdateStationDto extends ValidatableStationDto {
    @IsOptional()
    @Exclude()
    stationId!: string;

    @ApiPropertyOptional({ type: 'string' })
    @IsOptional()
    stationName?: string;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    stationSubName?: string;

    @ApiPropertyOptional({ type: 'number' })
    @IsOptional()
    stationType?: number;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    stationDescription?: string;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    stationLatLng?: string;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    stationUrl?: string;
}
