import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { Route } from '../../domain/route';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from '../dtos/base-route.dto';

export class RouteDomainBuilder implements BaseRouteDto {
    routeId: string | undefined;
    agencyId: string | undefined;
    routeCode: string | null | undefined;
    routeShortName: string | null | undefined;
    routeLongName: string | null | undefined;
    routeDescription: string | null | undefined;
    routeType: ERouteType | undefined;
    routeUrl: string | null | undefined;
    routeColor: string | null | undefined;
    routeTextColor: string | null | undefined;
    routeSortOrder: number | null | undefined;

    constructor(dto: BaseRouteDto) {
        this.routeId = dto.routeId;
        this.agencyId = dto.agencyId;
        this.routeCode = dto.routeCode;
        this.routeShortName = dto.routeShortName;
        this.routeLongName = dto.routeLongName;
        this.routeDescription = dto.routeDescription;
        this.routeType = dto.routeType;
        this.routeUrl = dto.routeUrl;
        this.routeColor = dto.routeColor;
        this.routeTextColor = dto.routeTextColor;
        this.routeSortOrder = dto.routeSortOrder;
    }

    build(): Route {
        return Route.create(
            {
                agencyId: AgencyId.create(new UniqueEntityID(this.agencyId)),
                routeCode: this.routeCode ?? null,
                routeShortName: this.routeShortName ?? null,
                routeLongName: this.routeLongName ?? null,
                routeDescription: this.routeDescription ?? null,
                routeType: this.routeType ?? ERouteType.UNKNOWN,
                routeUrl: this.routeUrl ?? null,
                routeColor: this.routeColor ?? null,
                routeTextColor: this.routeTextColor ?? null,
                routeSortOrder: this.routeSortOrder ?? null,
            },
            new UniqueEntityID(this.routeId),
        );
    }
}
