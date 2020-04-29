import { IAgencyQuery } from '../../usecase/queries/agency-query.interface';
import { AgencyDetailsDto } from '../../usecase/dto/agency-details.dto';
import { AgencyModel } from '../models/agency.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AgencyDtoBuilder } from '../builders/agency-dto.builder';

export class AgencyQuery implements IAgencyQuery {
    constructor(
        @InjectRepository(AgencyModel)
        private readonly repository: Repository<AgencyModel>,
    ) {}

    async findAll(): Promise<AgencyDetailsDto[]> {
        const result = await this.repository.find();
        return result.map((o) => new AgencyDtoBuilder(o).build());
    }

    async findById(id: string): Promise<AgencyDetailsDto> {
        const result = await this.repository.findOne({
            where: {
                id,
            },
        });

        if (!result) {
            return null;
        }

        return new AgencyDtoBuilder(result).build();
    }
}
