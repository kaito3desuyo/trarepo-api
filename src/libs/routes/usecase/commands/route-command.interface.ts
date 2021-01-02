import { Route } from '../../domain/route';
import { RouteDetailsDto } from '../dtos/route-details.dto';

export interface IRouteCommand {
    save(route: Route | Route[]): Promise<RouteDetailsDto[]>;
    remove(route: Route | Route[]): Promise<RouteDetailsDto[]>;
}
