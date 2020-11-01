import { AgencyId } from '@src/libs/agencies/domain/agency-id';
import { RouteId } from '../../domain/route-id';
import { ERouteType } from '../../domain/route-type.enum';
import { IRouteNotification } from '../../domain/route.interface';
import { RouteModel } from '../models/route.model';

export class RouteModelBuilder implements IRouteNotification {
    private _routeId: RouteId;
    private _agencyId: AgencyId;
    private _routeCode: string;
    private _routeShortName: string;
    private _routeLongName: string;
    private _routeDescription: string;
    private _routeType: ERouteType;
    private _routeUrl: string;
    private _routeColor: string;
    private _routeTextColor: string;
    private _routeSortOrder: number;

    set routeId(routeId: RouteId) {
        this._routeId = routeId;
    }

    set agencyId(agencyId: AgencyId) {
        this._agencyId = agencyId;
    }

    set routeCode(routeCode: string) {
        this._routeCode = routeCode;
    }

    set routeShortName(routeShortName: string) {
        this._routeShortName = routeShortName;
    }

    set routeLongName(routeLongName: string) {
        this._routeLongName = routeLongName;
    }

    set routeDescription(routeDescription: string) {
        this._routeDescription = routeDescription;
    }

    set routeType(routeType: ERouteType) {
        this._routeType = routeType;
    }

    set routeUrl(routeUrl: string) {
        this._routeUrl = routeUrl;
    }

    set routeColor(routeColor: string) {
        this._routeColor = routeColor;
    }

    set routeTextColor(routeTextColor: string) {
        this._routeTextColor = routeTextColor;
    }

    set routeSortOrder(routeSortOrder: number) {
        this._routeSortOrder = routeSortOrder;
    }

    build(): RouteModel {
        const model = new RouteModel();
        model.id = this._routeId.id.toString();
        model.agencyId = this._agencyId.id.toString();
        model.routeCode = this._routeCode;
        model.routeShortName = this._routeShortName;
        model.routeLongName = this._routeLongName;
        model.routeDescription = this._routeDescription;
        model.routeType = this._routeType;
        model.routeUrl = this._routeUrl;
        model.routeColor = this._routeColor;
        model.routeTextColor = this._routeTextColor;
        model.routeSortOrder = this._routeSortOrder;
        return model;
    }
}
