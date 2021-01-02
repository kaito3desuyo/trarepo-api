import { StationModel } from '../models/station.model';
import { StationDetailsDto } from '../../usecase/dtos/station-details.dto';

export class StationDtoBuilder implements StationModel {
    id: string;
    stationName: string;
    stationSubName: string | null;
    stationType: number;
    stationDescription: string | null;
    stationLatLng: { type: string; coordinates: string[] } | null;
    stationUrl: string | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(model: StationModel) {
        this.id = model.id;
        this.stationName = model.stationName;
        this.stationSubName = model.stationSubName;
        this.stationType = model.stationType;
        this.stationDescription = model.stationDescription;
        this.stationLatLng = model.stationLatLng;
        this.stationUrl = model.stationUrl;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    build(): StationDetailsDto {
        return {
            stationId: this.id,
            stationName: this.stationName,
            stationSubName: this.stationSubName ?? null,
            stationType: this.stationType,
            stationDescription: this.stationDescription ?? null,
            stationLatLng: this.stationLatLng
                ? this.stationLatLng.coordinates[1] +
                  ',' +
                  this.stationLatLng.coordinates[0]
                : null,
            stationUrl: this.stationUrl ?? null,
        };
    }
}
