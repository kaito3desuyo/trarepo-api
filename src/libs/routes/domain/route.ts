import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { RouteId } from './route-id';
import {
    IRouteNotification,
    IRouteProps,
    IRouteUpdateDetailsProps,
} from './route.interface';

export class Route extends AggregateRoot<IRouteProps> {
    private constructor(props: IRouteProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: IRouteProps, id?: UniqueEntityID): Route {
        return new Route(
            {
                ...props,
            },
            id,
        );
    }

    public updateDetails(props: IRouteUpdateDetailsProps): void {
        if (props.routeCode !== undefined) {
            this.props.routeCode = props.routeCode;
        }
        if (props.routeShortName !== undefined) {
            this.props.routeShortName = props.routeShortName;
        }
        if (props.routeLongName !== undefined) {
            this.props.routeLongName = props.routeLongName;
        }
        if (props.routeDescription !== undefined) {
            this.props.routeDescription = props.routeDescription;
        }
        if (props.routeUrl !== undefined) {
            this.props.routeUrl = props.routeUrl;
        }
        if (props.routeColor !== undefined) {
            this.props.routeColor = props.routeColor;
        }
        if (props.routeTextColor !== undefined) {
            this.props.routeTextColor = props.routeTextColor;
        }
        if (props.routeSortOrder !== undefined) {
            this.props.routeSortOrder = props.routeSortOrder;
        }
    }

    public notify(notifier: IRouteNotification): void {
        notifier.routeId = RouteId.create(this._id);
        notifier.agencyId = this.props.agencyId;
        notifier.routeCode = this.props.routeCode;
        notifier.routeShortName = this.props.routeShortName;
        notifier.routeLongName = this.props.routeLongName;
        notifier.routeDescription = this.props.routeDescription;
        notifier.routeType = this.props.routeType;
        notifier.routeUrl = this.props.routeUrl;
        notifier.routeColor = this.props.routeColor;
        notifier.routeTextColor = this.props.routeTextColor;
        notifier.routeSortOrder = this.props.routeSortOrder;
    }
}
