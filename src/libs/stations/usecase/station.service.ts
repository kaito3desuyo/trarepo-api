import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateStationDto } from './dtos/create-station.dto';
import { StationDetailsDto } from './dtos/station-details.dto';
import { StationCommand } from '../infrastructure/commands/station.command';
import { StationDomainBuilder } from './builders/station-domain.builder';
import { StationQuery } from '../infrastructure/queries/station.query';
import { UpdateStationDto } from './dtos/update-station.dto';

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

    async findOne(id: string): Promise<StationDetailsDto> {
        const result = await this.stationQuery.findOne(id);
        return result;
    }

    async add(dto: CreateStationDto): Promise<StationDetailsDto> {
        const domain = new StationDomainBuilder(dto).build();
        const result = await this.stationCommand.save(domain);
        return result[0];
    }

    async update(dto: UpdateStationDto): Promise<StationDetailsDto> {
        const current = await this.stationQuery.findOne(dto.stationId);

        if (!current) {
            throw new UnprocessableEntityException('Station not found.');
        }

        const domain = new StationDomainBuilder({
            ...current,
            ...dto,
        }).build();
        const result = await this.stationCommand.save(domain);
        return result[0];
    }

    async remove(id: string): Promise<void> {
        const current = await this.stationQuery.findOne(id);

        if (!current) {
            throw new UnprocessableEntityException('Station not found.');
        }

        const domain = new StationDomainBuilder(current).build();
        await this.stationCommand.remove(domain);
    }
}
