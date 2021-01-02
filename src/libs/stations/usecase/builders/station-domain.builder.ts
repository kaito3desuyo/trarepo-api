import { UniqueEntityID } from '@src/core/classes/unique-entity-id';
import { Station } from '../../domain/station';
import { IStationProps } from '../../domain/station.interface';
import { BaseStationDto } from '../dtos/base-station.dto';

export class StationDomainBuilder implements BaseStationDto {
    stationId?: string;
    stationName?: string;
    stationSubName?: string | null;
    stationType?: number;
    stationDescription?: string | null;
    stationLatLng?: string | null;
    stationUrl?: string | null;

    private get _stationName(): string {
        return this.stationName ?? '';
    }

    private get _stationSubName(): string | null {
        return this.stationSubName ?? null;
    }

    private get _stationType(): number {
        return this.stationType ?? 9;
    }

    private get _stationDescription(): string | null {
        return this.stationDescription ?? null;
    }

    private get _stationLatLng(): {
        latitude: string;
        longitude: string;
    } | null {
        return this.stationLatLng
            ? {
                  latitude: this.stationLatLng.split(',')[0],
                  longitude: this.stationLatLng.split(',')[1],
              }
            : null;
    }

    private get _stationUrl(): string | null {
        return this.stationUrl ?? null;
    }

    constructor(dto: BaseStationDto) {
        this.stationId = dto.stationId;
        this.stationName = dto.stationName;
        this.stationSubName = dto.stationSubName;
        this.stationType = dto.stationType;
        this.stationDescription = dto.stationDescription;
        this.stationLatLng = dto.stationLatLng;
        this.stationUrl = dto.stationUrl;
    }

    build(): Station {
        return Station.create(
            {
                stationName: this._stationName,
                stationSubName: this._stationSubName,
                stationType: this._stationType,
                stationDescription: this._stationDescription,
                stationLatLng: this._stationLatLng,
                stationUrl: this._stationUrl,
            },
            new UniqueEntityID(this.stationId),
        );
    }

    getProps(): Partial<IStationProps> {
        const obj: Partial<IStationProps> = {};
        if (this.stationName) {
            obj.stationName = this._stationName;
        }
        if (this.stationSubName) {
            obj.stationSubName = this._stationSubName;
        }
        if (this.stationType) {
            obj.stationType = this._stationType;
        }
        if (this.stationDescription) {
            obj.stationDescription = this._stationDescription;
        }
        if (this.stationLatLng) {
            obj.stationLatLng = this._stationLatLng;
        }
        if (this.stationUrl) {
            obj.stationUrl = this._stationUrl;
        }
        return obj;
    }
}
