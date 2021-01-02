import { StationDetailsDto } from '../dtos/station-details.dto';

export interface IStationQuery {
    findMany(): Promise<StationDetailsDto[]>;
    findOne(id: string): Promise<StationDetailsDto | null>;
}
