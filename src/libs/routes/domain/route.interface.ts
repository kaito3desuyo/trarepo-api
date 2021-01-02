import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { RouteId } from './route-id';
import { ERouteType } from './route-type.enum';

export interface IRouteProps {
    // routeId: RouteId;
    agencyId: AgencyId;
    routeCode: string | null;
    routeShortName: string | null;
    routeLongName: string | null;
    routeDescription: string | null;
    routeType: ERouteType;
    routeUrl: string | null;
    routeColor: string | null;
    routeTextColor: string | null;
    routeSortOrder: number | null;
}

export interface IRouteNotification extends Required<IRouteProps> {
    routeId: RouteId;
}
