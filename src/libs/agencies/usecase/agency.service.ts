import { Injectable } from '@nestjs/common';
import { AgencyCommand } from '../infrastructure/commands/agency.command';
import { AgencyQuery } from '../infrastructure/queries/agency.query';
import { AgencyDomainBuilder } from './builders/agency-domain.builder';
import { AgencyDetailsDto } from './dto/agency-details.dto';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { FindAgencyByIdParam } from './params/find-agency-by-id.param';
import { RemoveAgencyParam } from './params/remove-agency.param';
import { UpdateAgencyParam } from './params/update-agency.param';

@Injectable()
export class AgencyService {
    constructor(
        private readonly agencyCommand: AgencyCommand,
        private readonly agencyQuery: AgencyQuery,
    ) {}

    async findAll(): Promise<AgencyDetailsDto[]> {
        return this.agencyQuery.findAll();
    }

    async findById(params: FindAgencyByIdParam): Promise<AgencyDetailsDto> {
        return this.agencyQuery.findById(params.agencyId);
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
        const domain = new AgencyDomainBuilder({
            ...target,
            ...dto,
        }).build();
        const result = await this.agencyCommand.save(domain);
        return result[0];
    }

    async remove(params: RemoveAgencyParam): Promise<AgencyDetailsDto> {
        const target = await this.agencyQuery.findById(params.agencyId);
        const domain = new AgencyDomainBuilder(target).build();
        const result = await this.agencyCommand.remove(domain);
        return result[0];
    }
}
