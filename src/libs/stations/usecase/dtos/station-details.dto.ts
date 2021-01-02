import { ApiProperty } from '@nestjs/swagger';
import { BaseStationDto } from './base-station.dto';

export class StationDetailsDto extends BaseStationDto {
    @ApiProperty()
    stationId!: string;

    @ApiProperty()
    stationName!: string;

    @ApiProperty()
    stationSubName!: string | null;

    @ApiProperty()
    stationType!: number;

    @ApiProperty()
    stationDescription!: string | null;

    @ApiProperty()
    stationLatLng!: string | null;

    @ApiProperty()
    stationUrl!: string | null;
}
