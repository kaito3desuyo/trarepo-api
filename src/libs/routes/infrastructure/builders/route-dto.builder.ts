import { ERouteType } from '../../domain/route-type.enum';
import { RouteDetailsDto } from '../../usecase/dtos/route-details.dto';
import { RouteModel } from '../models/route.model';

export class RouteDtoBuilder implements RouteModel {
    id: string;
    agencyId: string;
    routeCode: string | null;
    routeShortName: string | null;
    routeLongName: string | null;
    routeDescription: string | null;
    routeType: ERouteType;
    routeUrl: string | null;
    routeColor: string | null;
    routeTextColor: string | null;
    routeSortOrder: number | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(model: RouteModel) {
        this.id = model.id;
        this.agencyId = model.agencyId;
        this.routeCode = model.routeCode;
        this.routeShortName = model.routeShortName;
        this.routeLongName = model.routeLongName;
        this.routeDescription = model.routeDescription;
        this.routeType = model.routeType;
        this.routeUrl = model.routeUrl;
        this.routeColor = model.routeColor;
        this.routeTextColor = model.routeTextColor;
        this.routeSortOrder = model.routeSortOrder;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    build(): RouteDetailsDto {
        const dto = new RouteDetailsDto();
        dto.routeId = this.id;
        dto.agencyId = this.agencyId;
        dto.routeCode = this.routeCode;
        dto.routeShortName = this.routeShortName;
        dto.routeLongName = this.routeLongName;
        dto.routeDescription = this.routeDescription;
        dto.routeType = this.routeType;
        dto.routeUrl = this.routeUrl;
        dto.routeColor = this.routeColor;
        dto.routeTextColor = this.routeTextColor;
        dto.routeSortOrder = this.routeSortOrder;
        // dto.createdAt
        // dto.updatedAt
        return dto;
    }
}
