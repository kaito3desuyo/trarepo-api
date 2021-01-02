import { ERouteType } from '../../domain/route-type.enum';

export class BaseRouteDto {
    routeId?: string;
    agencyId?: string;
    routeCode?: string | null;
    routeShortName?: string | null;
    routeLongName?: string | null;
    routeDescription?: string | null;
    routeType?: ERouteType;
    routeUrl?: string | null;
    routeColor?: string | null;
    routeTextColor?: string | null;
    routeSortOrder?: number | null;
}
