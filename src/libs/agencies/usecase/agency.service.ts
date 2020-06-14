import { Injectable, NotFoundException } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { AgencyCommand } from '../infrastructure/commands/agency.command';
import { AgencyQuery } from '../infrastructure/queries/agency.query';
import { AgencyDomainBuilder } from './builders/agency-domain.builder';
import { AgencyDetailsDto } from './dtos/agency-details.dto';
import { CreateAgencyDto } from './dtos/create-agency.dto';
import { UpdateAgencyDto } from './dtos/update-agency.dto';
import { FindAgencyByIdParam } from './params/find-agency-by-id.param';
import { RemoveAgencyParam } from './params/remove-agency.param';
import { UpdateAgencyParam } from './params/update-agency.param';
import { FindManyAgencyQueryParam } from './params/find-many-agency.query-param';

@Injectable()
export class AgencyService {
    constructor(
        private readonly agencyCommand: AgencyCommand,
        private readonly agencyQuery: AgencyQuery,
    ) {}

    async findAll(): Promise<AgencyDetailsDto[]> {
        return this.agencyQuery.findAll();
    }

    async findMany(
        params: FindManyAgencyQueryParam,
    ): Promise<Pagination<AgencyDetailsDto>> {
        return this.agencyQuery.findMany({
            pageIndex: params.page,
            pageSize: params.per,
        });
    }

    async findById(params: FindAgencyByIdParam): Promise<AgencyDetailsDto> {
        const result = await this.agencyQuery.findById(params.agencyId);

        if (!result) {
            throw new NotFoundException('Agency not found.');
        }

        return result;
    }

    async add(dto: CreateAgencyDto): Promise<AgencyDetailsDto> {
        const domain = new AgencyDomainBuilder(dto).build();
        const result = await this.agencyCommand.save(domain);
        return result[0];
    }

    async update(
        params: UpdateAgencyParam,
        dto: UpdateAgencyDto,
    ): Promise<AgencyDetailsDto> {
        const target = await this.agencyQuery.findById(params.agencyId);

        if (!target) {
            throw new NotFoundException('Agency not found.');
        }

        const domain = new AgencyDomainBuilder({
            ...target,
            ...dto,
        }).build();
        const result = await this.agencyCommand.save(domain);
        return result[0];
    }

    async remove(params: RemoveAgencyParam): Promise<AgencyDetailsDto> {
        const target = await this.agencyQuery.findById(params.agencyId);

        if (!target) {
            throw new NotFoundException('Agency not found.');
        }

        const domain = new AgencyDomainBuilder(target).build();
        const result = await this.agencyCommand.remove(domain);
        return result[0];
    }
}
