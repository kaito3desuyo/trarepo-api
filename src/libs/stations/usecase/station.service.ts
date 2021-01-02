import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateStationDto } from './dtos/create-station.dto';
import { StationDetailsDto } from './dtos/station-details.dto';
import { StationCommand } from '../infrastructure/commands/station.command';
import { StationDomainBuilder } from './builders/station-domain.builder';
import { StationQuery } from '../infrastructure/queries/station.query';
import { UpdateStationDto } from './dtos/update-station.dto';
import { UpdateStationParam } from './params/update-station.param';
import { FindManyStationQueryParam } from './params/find-many-station.query-param';
import { Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class StationService {
    constructor(
        private readonly stationCommand: StationCommand,
        private readonly stationQuery: StationQuery,
    ) {}

    async findMany(
        params: FindManyStationQueryParam,
    ): Promise<Pagination<StationDetailsDto>> {
        return this.stationQuery.findMany({
            pageIndex: params.page,
            pageSize: params.per,
        });
    }

    async findById(id: string): Promise<StationDetailsDto> {
        const result = await this.stationQuery.findById(id);

        if (!result) {
            throw new UnprocessableEntityException('Station not found.');
        }

        return result;
    }

    async add(dto: CreateStationDto): Promise<StationDetailsDto> {
        const domain = new StationDomainBuilder(dto).build();
        const result = await this.stationCommand.save(domain);
        return result[0];
    }

    async update(
        params: UpdateStationParam,
        dto: UpdateStationDto,
    ): Promise<StationDetailsDto> {
        const target = await this.stationQuery.findById(params.stationId);

        if (!target) {
            throw new UnprocessableEntityException('Station not found.');
        }

        const domain = new StationDomainBuilder(target).build();
        domain.updateDetails(new StationDomainBuilder(dto).getProps());

        const result = await this.stationCommand.save(domain);
        return result[0];
    }

    async remove(id: string): Promise<StationDetailsDto> {
        const current = await this.stationQuery.findById(id);

        if (!current) {
            throw new UnprocessableEntityException('Station not found.');
        }

        const domain = new StationDomainBuilder(current).build();
        const result = await this.stationCommand.remove(domain);
        return result[0];
    }
}
