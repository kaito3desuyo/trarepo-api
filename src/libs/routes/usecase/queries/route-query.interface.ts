import { Pagination } from 'nestjs-typeorm-paginate';
import { RouteDetailsDto } from '../dtos/route-details.dto';
import { FindManyRouteQueryObject } from '../query-objects/find-many-route.query-object';

export interface IRouteQuery {
    findAll(): Promise<RouteDetailsDto[]>;
    findMany(
        qo: FindManyRouteQueryObject,
    ): Promise<Pagination<RouteDetailsDto>>;
    findById(id: string): Promise<RouteDetailsDto | null>;
}
