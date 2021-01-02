import { ApiProperty } from '@nestjs/swagger';
import { BaseStationDto } from './base-station.dto';

export class StationDetailsDto extends BaseStationDto {
    @ApiProperty({ type: 'string' })
    stationId!: string;

    @ApiProperty({ type: 'string' })
    stationName!: string;

    @ApiProperty({ type: 'string', nullable: true })
    stationSubName!: string | null;

    @ApiProperty({ type: 'number' })
    stationType!: number;

    @ApiProperty({ type: 'string', nullable: true })
    stationDescription!: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    stationLatLng!: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    stationUrl!: string | null;
}
