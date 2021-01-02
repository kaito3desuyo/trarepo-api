import { Pagination } from 'nestjs-typeorm-paginate';
import { StationDetailsDto } from '../dtos/station-details.dto';
import { FindManyStationQueryObject } from '../query-objects/find-many-station.query-object';

export interface IStationQuery {
    findMany(
        qo: FindManyStationQueryObject,
    ): Promise<Pagination<StationDetailsDto>>;
    findById(id: string): Promise<StationDetailsDto | null>;
}
