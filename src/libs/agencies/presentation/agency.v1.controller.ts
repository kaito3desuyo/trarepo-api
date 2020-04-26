import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAgencyDto } from '../usecase/dto/create-agency.dto';
import { AgencyService } from '../usecase/agency.service';

@Controller()
@ApiTags('agencies')
export class AgencyV1Controller {
    constructor(private readonly agencyService: AgencyService) {}

    @Get()
    getAgencies() {
        return 'hoge';
    }

    @Post()
    postAgency(@Body() body: CreateAgencyDto) {
        return this.agencyService.addAgency(body);
    }

    @Put(':agencyId')
    putAgency() {
        return 'moke';
    }

    @Delete(':agencyId')
    deleteAgency() {
        return 'kamo';
    }
}
