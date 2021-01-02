import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { Route } from '../../domain/route';
import { ERouteType } from '../../domain/route-type.enum';
import { IRouteProps } from '../../domain/route.interface';
import { BaseRouteDto } from '../dtos/base-route.dto';

export class RouteDomainBuilder implements BaseRouteDto {
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

    private get _agencyId(): AgencyId {
        return AgencyId.create(new UniqueEntityID(this.agencyId));
    }

    private get _routeCode(): string | null {
        return this.routeCode ?? null;
    }

    private get _routeShortName(): string | null {
        return this.routeShortName ?? null;
    }

    private get _routeLongName(): string | null {
        return this.routeLongName ?? null;
    }

    private get _routeDescription(): string | null {
        return this.routeDescription ?? null;
    }

    private get _routeType(): ERouteType {
        return this.routeType ?? ERouteType.UNKNOWN;
    }

    private get _routeUrl(): string | null {
        return this.routeUrl ?? null;
    }

    private get _routeColor(): string | null {
        return this.routeColor ?? null;
    }

    private get _routeTextColor(): string | null {
        return this.routeTextColor ?? null;
    }

    private get _routeSortOrder(): number | null {
        return this.routeSortOrder ?? null;
    }

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
                agencyId: this._agencyId,
                routeCode: this._routeCode,
                routeShortName: this._routeShortName,
                routeLongName: this._routeLongName,
                routeDescription: this._routeDescription,
                routeType: this._routeType,
                routeUrl: this._routeUrl,
                routeColor: this._routeColor,
                routeTextColor: this._routeTextColor,
                routeSortOrder: this._routeSortOrder,
            },
            new UniqueEntityID(this.routeId),
        );
    }

    getProps(): Partial<IRouteProps> {
        const obj: Partial<IRouteProps> = {};
        if (this.agencyId) {
            obj.agencyId = this._agencyId;
        }
        if (this.routeCode) {
            obj.routeCode = this._routeCode;
        }
        if (this.routeShortName) {
            obj.routeShortName = this._routeShortName;
        }
        if (this.routeLongName) {
            obj.routeLongName = this._routeLongName;
        }
        if (this.routeDescription) {
            obj.routeDescription = this._routeDescription;
        }
        if (this.routeType) {
            obj.routeType = this._routeType;
        }
        if (this.routeUrl) {
            obj.routeUrl = this._routeUrl;
        }
        if (this.routeColor) {
            obj.routeColor = this._routeColor;
        }
        if (this.routeTextColor) {
            obj.routeTextColor = this._routeTextColor;
        }
        if (this.routeSortOrder) {
            obj.routeSortOrder = this._routeSortOrder;
        }

        return obj;
    }
}
