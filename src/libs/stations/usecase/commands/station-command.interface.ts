import { Station } from '../../domain/station';
import { StationDetailsDto } from '../dtos/station-details.dto';

export interface IStationCommand {
    save(station: Station | Station[]): Promise<StationDetailsDto[]>;
    remove(station: Station | Station[]): Promise<StationDetailsDto[]>;
}
