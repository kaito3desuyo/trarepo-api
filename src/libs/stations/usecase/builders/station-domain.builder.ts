import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { Station } from '../../domain/station';
import { BaseStationDto } from '../dtos/base-station.dto';

export class StationDomainBuilder implements BaseStationDto {
    stationId: string;
    stationName: string;
    stationSubName?: string;
    stationType: number;
    stationDescription?: string;
    stationLatLng?: string;
    stationUrl?: string;

    constructor(dto: BaseStationDto) {
        this.stationId = dto.stationId;
        this.stationName = dto.stationName;
        this.stationSubName = dto.stationSubName;
        this.stationType = dto.stationType;
        this.stationDescription = dto.stationDescription;
        this.stationLatLng = dto.stationLatLng;
        this.stationUrl = dto.stationUrl;
    }

    build(): Station {
        return Station.create(
            {
                stationName: this.stationName,
                stationSubName: this.stationSubName ?? null,
                stationType: this.stationType,
                stationDescription: this.stationDescription ?? null,
                stationLatLng: this.stationLatLng
                    ? {
                          latitude: this.stationLatLng?.split(',')[0] ?? null,
                          longitude: this.stationLatLng?.split(',')[1] ?? null,
                      }
                    : null,
                stationUrl: this.stationUrl ?? null,
            },
            new UniqueEntityID(this.stationId),
        );
    }
}
