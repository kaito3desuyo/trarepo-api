import { Injectable } from '@nestjs/common';
import { IStationQuery } from '../../usecase/queries/station-query.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { StationModel } from '../models/station.model';
import { Repository } from 'typeorm';
import { StationDetailsDto } from '../../usecase/dtos/station-details.dto';
import { StationDtoBuilder } from '../builders/station-dto.builder';

@Injectable()
export class StationQuery implements IStationQuery {
    constructor(
        @InjectRepository(StationModel)
        private readonly repository: Repository<StationModel>,
    ) {}

    async findMany(): Promise<StationDetailsDto[]> {
        const result = await this.repository.find();
        return result.map((o) => new StationDtoBuilder(o).build());
    }
}
