import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { Route } from '../../domain/route';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from '../dtos/base-route.dto';

export class RouteDomainBuilder implements BaseRouteDto {
    routeId: string;
    agencyId: string;
    routeCode: string;
    routeShortName: string;
    routeLongName: string;
    routeDescription: string;
    routeType: ERouteType;
    routeUrl: string;
    routeColor: string;
    routeTextColor: string;
    routeSortOrder: number;

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
                routeCode: this.routeCode,
                routeShortName: this.routeShortName,
                routeLongName: this.routeLongName,
                routeDescription: this.routeDescription,
                routeType: this.routeType,
                routeUrl: this.routeUrl,
                routeColor: this.routeColor,
                routeTextColor: this.routeTextColor,
                routeSortOrder: this.routeSortOrder,
            },
            new UniqueEntityID(this.routeId),
        );
    }
}
