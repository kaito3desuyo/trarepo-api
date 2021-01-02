import { StationId } from './station-id';

export interface IStationProps {
    stationName: string;
    stationSubName: string | null;
    stationType: number;
    stationDescription: string | null;
    stationLatLng: {
        latitude: string;
        longitude: string;
    } | null;
    stationUrl: string | null;
}

export interface IStationNotification extends IStationProps {
    stationId: StationId;
}
