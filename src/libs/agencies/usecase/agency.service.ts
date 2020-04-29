import { Injectable } from '@nestjs/common';
import { AgencyCommand } from '../infrastructure/commands/agency.command';
import { AgencyDomainBuilder } from './builders/agency-domain.builder';
import { AgencyDetailsDto } from './dto/agency-details.dto';
import { CreateAgencyDto } from './dto/create-agency.dto';

@Injectable()
export class AgencyService {
    constructor(private readonly agencyCommand: AgencyCommand) {}

    async createAgency(dto: CreateAgencyDto): Promise<AgencyDetailsDto> {
        const domain = new AgencyDomainBuilder(dto).build();
        const result = await this.agencyCommand.save(domain);
        return result[0];
    }
}
