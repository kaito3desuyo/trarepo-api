import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { AgencyDetailsDto } from '../../usecase/dtos/agency-details.dto';
import { IAgencyQuery } from '../../usecase/queries/agency-query.interface';
import { AgencyDtoBuilder } from '../builders/agency-dto.builder';
import { AgencyModel } from '../models/agency.model';
import { FindManyAgencyQueryObject } from '../../usecase/query-objects/find-many-agency.query-object';

export class AgencyQuery implements IAgencyQuery {
    constructor(
        @InjectRepository(AgencyModel)
        private readonly repository: Repository<AgencyModel>,
    ) {}

    async findAll(): Promise<AgencyDetailsDto[]> {
        const result = await this.repository.find();
        return result.map((o) => new AgencyDtoBuilder(o).build());
    }

    async findMany(
        qo: FindManyAgencyQueryObject,
    ): Promise<Pagination<AgencyDetailsDto>> {
        const result = await paginate<AgencyModel>(this.repository, {
            page: qo.pageIndex,
            limit: qo.pageSize,
        });

        const data: Pagination<AgencyDetailsDto> = new Pagination<
            AgencyDetailsDto
        >(
            result.items.map((o) => new AgencyDtoBuilder(o).build()),
            result.meta,
            result.links,
        );

        return data;
    }

    async findById(id: string): Promise<AgencyDetailsDto | null> {
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
