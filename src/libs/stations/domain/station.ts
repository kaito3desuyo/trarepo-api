import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { StationId } from './station-id';
import {
    IStationNotification,
    IStationProps,
    IStationUpdateDetailsProps,
} from './station.interface';

export class Station extends AggregateRoot<IStationProps> {
    private constructor(props: IStationProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: IStationProps, id?: UniqueEntityID): Station {
        return new Station(props, id);
    }

    public updateDetails(props: IStationUpdateDetailsProps): void {
        if (props.stationName !== undefined) {
            this.props.stationName = props.stationName;
        }
        if (props.stationSubName !== undefined) {
            this.props.stationSubName = props.stationSubName;
        }
        if (props.stationType !== undefined) {
            this.props.stationType = props.stationType;
        }
        if (props.stationDescription !== undefined) {
            this.props.stationDescription = props.stationDescription;
        }
        if (props.stationLatLng !== undefined) {
            this.props.stationLatLng = props.stationLatLng;
        }
        if (props.stationUrl !== undefined) {
            this.props.stationUrl = props.stationUrl;
        }
    }

    public notify(notifier: IStationNotification): void {
        notifier.stationId = StationId.create(this.id);
        notifier.stationName = this.props.stationName;
        notifier.stationSubName = this.props.stationSubName;
        notifier.stationType = this.props.stationType;
        notifier.stationDescription = this.props.stationDescription;
        notifier.stationLatLng = this.props.stationLatLng;
        notifier.stationUrl = this.props.stationUrl;
    }
}
