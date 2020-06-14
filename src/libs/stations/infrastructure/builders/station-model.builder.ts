import { IStationNotification } from '../../domain/station.interface';
import { StationId } from '../../domain/station-id';
import { StationModel } from '../models/station.model';

export class StationModelBuilder implements IStationNotification {
    private _stationId: StationId;
    private _stationName: string;
    private _stationSubName: string;
    private _stationType: number;
    private _stationDescription: string;
    private _stationLatLng: {
        latitude: number;
        longitude: number;
    };
    private _stationUrl: string;

    set stationId(stationId: StationId) {
        this._stationId = stationId;
    }

    set stationName(stationName: string) {
        this._stationName = stationName;
    }

    set stationSubName(stationSubName: string) {
        this._stationSubName = stationSubName;
    }

    set stationType(stationType: number) {
        this._stationType = stationType;
    }

    set stationDescription(stationDescription: string) {
        this._stationDescription = stationDescription;
    }

    set stationLatLng(stationLatLng: { latitude: number; longitude: number }) {
        this._stationLatLng = stationLatLng;
    }

    set stationUrl(stationUrl: string) {
        this._stationUrl = stationUrl;
    }

    build(): StationModel {
        const model = new StationModel();
        model.id = this._stationId.id.toString();
        model.stationName = this._stationName;
        model.stationSubName = this._stationSubName;
        model.stationType = this._stationType;
        model.stationDescription = this._stationDescription;
        model.stationLatLng = {
            type: 'Point',
            coordinates: [
                this._stationLatLng.longitude,
                this._stationLatLng.latitude,
            ],
        };
        model.stationUrl = this._stationUrl;
        return model;
    }
}
