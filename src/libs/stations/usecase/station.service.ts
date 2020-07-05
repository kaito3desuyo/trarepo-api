import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dtos/create-station.dto';
import { StationDetailsDto } from './dtos/station-details.dto';
import { StationCommand } from '../infrastructure/commands/station.command';
import { StationDomainBuilder } from './builders/station-domain.builder';
import { StationQuery } from '../infrastructure/queries/station.query';

@Injectable()
export class StationService {
    constructor(
        private readonly stationCommand: StationCommand,
        private readonly stationQuery: StationQuery,
    ) {}

    async findMany(): Promise<StationDetailsDto[]> {
        const result = await this.stationQuery.findMany();
        return result;
    }

    async add(dto: CreateStationDto): Promise<StationDetailsDto> {
        const domain = new StationDomainBuilder(dto).build();
        const result = await this.stationCommand.save(domain);
        return result[0];
    }
}
