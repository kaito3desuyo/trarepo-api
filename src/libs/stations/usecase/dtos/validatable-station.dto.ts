import {
    IsInt,
    IsLatLong,
    IsOptional,
    IsString,
    IsUrl,
    IsUUID,
} from 'class-validator';
import { BaseStationDto } from './base-station.dto';

export class ValidatableStationDto extends BaseStationDto {
    @IsUUID()
    stationId: string;

    @IsString()
    stationName: string;

    @IsOptional()
    @IsString()
    stationSubName?: string;

    @IsInt()
    stationType: number;

    @IsOptional()
    @IsString()
    stationDescription?: string;

    @IsOptional()
    @IsLatLong()
    stationLatLng?: string;

    @IsOptional()
    @IsUrl()
    stationUrl?: string;
}
