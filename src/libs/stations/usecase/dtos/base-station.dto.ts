export class BaseStationDto {
    stationId!: string;
    stationName!: string;
    stationSubName?: string | null;
    stationType!: number;
    stationDescription?: string | null;
    stationLatLng?: string | null;
    stationUrl?: string | null;
}
