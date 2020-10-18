import { ERouteType } from '../../domain/route-type.enum';

export class BaseRouteDto {
    routeId?: string;
    agencyId?: string;
    routeCode?: string;
    routeShortName?: string;
    routeLongName?: string;
    routeDescription?: string;
    routeType?: ERouteType;
    routeUrl?: string;
    routeColor?: string;
    routeTextColor?: string;
    routeSortOrder?: number;
}
