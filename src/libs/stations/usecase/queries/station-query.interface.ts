import { StationDetailsDto } from '../dtos/station-details.dto';

export interface IStationQuery {
    findMany(): Promise<StationDetailsDto[]>;
}
