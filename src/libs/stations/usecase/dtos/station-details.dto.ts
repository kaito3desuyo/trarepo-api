import { ApiProperty } from '@nestjs/swagger';
import { BaseStationDto } from './base-station.dto';

export class StationDetailsDto extends BaseStationDto {
    @ApiProperty()
    stationId: string;

    @ApiProperty()
    stationName: string;

    @ApiProperty()
    stationSubName: string;

    @ApiProperty()
    stationType: number;

    @ApiProperty()
    stationDescription: string;

    @ApiProperty()
    stationLatLng: string;

    @ApiProperty()
    stationUrl: string;
}
