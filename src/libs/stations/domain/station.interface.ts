import { StationId } from './station-id';

export interface IStationProps {
    stationId: StationId;
    stationName: string;
    stationSubName: string;
    stationType: number;
    stationDescription: string;
    stationLatLng: {
        latitude: number;
        longitude: number;
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
        latitude: number;
        longitude: number;
    };
    stationUrl: string;
}
