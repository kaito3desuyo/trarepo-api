import { AggregateRoot } from '@src/core/classes/aggregate-root';
import { IStationProps, IStationNotification } from './station.interface';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { StationId } from './station-id';

export class Station extends AggregateRoot<IStationProps> {
    private constructor(props: IStationProps, id?: UniqueEntityID) {
        super(props, id);
    }

    static create(props: IStationProps, id?: UniqueEntityID): Station {
        return new Station(props, id);
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
