import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { RouteId } from './route-id';
import { ERouteType } from './route-type.enum';

export interface IRouteProps {
    // routeId: RouteId;
    agencyId: AgencyId;
    routeCode?: string;
    routeShortName?: string;
    routeLongName?: string;
    routeDescription?: string;
    routeType: ERouteType;
    routeUrl?: string;
    routeColor?: string;
    routeTextColor?: string;
    routeSortOrder?: number;
}

export interface IRouteNotification extends Required<IRouteProps> {
    routeId: RouteId;
}
