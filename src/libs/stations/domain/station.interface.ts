import { StationId } from './station-id';

export interface IStationProps {
    stationId: StationId;
    stationName: string;
    stationSubName: string;
    stationType: number;
    stationDescription: string;
    stationLatLng: {
        latitude: string;
        longitude: string;
    };
    stationUrl: string;
}

export interface IStationNotification {
    stationId: StationId;
    stationName: string;
    stationSubName: string;
    stationType: number;
    stationDescription: string;
    stationLatLng: {
        latitude: string;
        longitude: string;
    };
    stationUrl: string;
}
