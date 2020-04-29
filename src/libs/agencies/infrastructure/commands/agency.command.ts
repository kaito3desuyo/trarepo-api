import { Injectable } from '@nestjs/common';
import { IAgencyCommand } from '../../usecase/commands/agency-command.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { AgencyModel } from '../models/agency.model';
import { Repository } from 'typeorm';
import { Agency } from '../../domain/agency';
import { AgencyDetailsDto } from '../../usecase/dtos/agency-details.dto';
import { isArray } from 'lodash';
import { AgencyModelBuilder } from '../builders/agency-model.builder';
import { AgencyDtoBuilder } from '../builders/agency-dto.builder';

@Injectable()
export class AgencyCommand implements IAgencyCommand {
    constructor(
        @InjectRepository(AgencyModel)
        private readonly repository: Repository<AgencyModel>,
    ) {}

    async save(agency: Agency | Agency[]): Promise<AgencyDetailsDto[]> {
        const data = isArray(agency) ? agency : [agency];

        const models = data.map((o) => {
            const builder = new AgencyModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.save(models);
        return result.map((o) => new AgencyDtoBuilder(o).build());
    }

    async remove(agency: Agency | Agency[]): Promise<AgencyDetailsDto[]> {
        const data = isArray(agency) ? agency : [agency];

        const models = data.map((o) => {
            const builder = new AgencyModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.remove(models);
        return result.map((o) => new AgencyDtoBuilder(o).build());
    }
}
