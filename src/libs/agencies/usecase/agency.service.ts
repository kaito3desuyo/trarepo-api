import { Injectable } from '@nestjs/common';
import { AgencyCommand } from '../infrastructure/commands/agency.command';
import { AgencyDomainBuilder } from './builders/agency-domain.builder';
import { AgencyDetailsDto } from './dto/agency-details.dto';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { AgencyQuery } from '../infrastructure/queries/agency.query';

@Injectable()
export class AgencyService {
    constructor(
        private readonly agencyCommand: AgencyCommand,
        private readonly agencyQuery: AgencyQuery,
    ) {}

    async findAll(): Promise<AgencyDetailsDto[]> {
        return this.agencyQuery.findAll();
    }

    async add(dto: CreateAgencyDto): Promise<AgencyDetailsDto> {
        const domain = new AgencyDomainBuilder(dto).build();
        const result = await this.agencyCommand.save(domain);
        return result[0];
    }
}
