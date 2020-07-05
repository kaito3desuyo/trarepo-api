import { Injectable } from '@nestjs/common';
import { IStationCommand } from '../../usecase/commands/station-command.interface';
import { Station } from '../../domain/station';
import { StationDetailsDto } from '../../usecase/dtos/station-details.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StationModel } from '../models/station.model';
import { Repository } from 'typeorm';
import { isArray } from 'lodash';
import { StationModelBuilder } from '../builders/station-model.builder';
import { StationDtoBuilder } from '../builders/station-dto.builder';

@Injectable()
export class StationCommand implements IStationCommand {
    constructor(
        @InjectRepository(StationModel)
        private readonly repository: Repository<StationModel>,
    ) {}

    async save(station: Station | Station[]): Promise<StationDetailsDto[]> {
        const data = isArray(station) ? station : [station];

        const models = data.map((o) => {
            const builder = new StationModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.save(models);
        return result.map((o) => new StationDtoBuilder(o).build());
    }

    async remove(station: Station | Station[]): Promise<StationDetailsDto[]> {
        const data = isArray(station) ? station : [station];

        const models = data.map((o) => {
            const builder = new StationModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.remove(models);
        return result.map((o) => new StationDtoBuilder(o).build());
    }
}
