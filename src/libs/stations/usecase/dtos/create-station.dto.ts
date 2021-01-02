import { ValidatableStationDto } from './validatable-station.dto';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStationDto extends ValidatableStationDto {
    @IsOptional()
    @Exclude()
    stationId?: string;

    @ApiProperty({ type: 'string' })
    stationName!: string;

    @ApiProperty({ type: 'string', nullable: true })
    stationSubName!: string;

    @ApiProperty({ type: 'number' })
    stationType!: number;

    @ApiProperty({ type: 'string', nullable: true })
    stationDescription!: string;

    @ApiProperty({ type: 'string', nullable: true })
    stationLatLng!: string;

    @ApiProperty({ type: 'string', nullable: true })
    stationUrl!: string;
}
