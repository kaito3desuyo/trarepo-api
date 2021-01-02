import { Injectable } from '@nestjs/common';
import { IStationQuery } from '../../usecase/queries/station-query.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { StationModel } from '../models/station.model';
import { Repository } from 'typeorm';
import { StationDetailsDto } from '../../usecase/dtos/station-details.dto';
import { StationDtoBuilder } from '../builders/station-dto.builder';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyStationQueryObject } from '../../usecase/query-objects/find-many-station.query-object';

@Injectable()
export class StationQuery implements IStationQuery {
    constructor(
        @InjectRepository(StationModel)
        private readonly repository: Repository<StationModel>,
    ) {}

    async findMany(
        qo: FindManyStationQueryObject,
    ): Promise<Pagination<StationDetailsDto>> {
        const result = await paginate<StationModel>(this.repository, {
            page: qo.pageIndex,
            limit: qo.pageSize,
        });

        const data: Pagination<StationDetailsDto> = new Pagination<
            StationDetailsDto
        >(
            result.items.map((o) => new StationDtoBuilder(o).build()),
            result.meta,
            result.links,
        );

        return data;
    }

    async findById(id: string): Promise<StationDetailsDto | null> {
        const result = await this.repository.findOne(id);

        if (!result) {
            return null;
        }

        return new StationDtoBuilder(result).build();
    }
}
