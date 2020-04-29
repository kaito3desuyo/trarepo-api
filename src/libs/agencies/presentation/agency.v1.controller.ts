import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAgencyDto } from '../usecase/dto/create-agency.dto';
import { AgencyService } from '../usecase/agency.service';
import { FindByIdParam } from '../usecase/params/find-by-id.param';

@Controller()
@ApiTags('agencies')
export class AgencyV1Controller {
    constructor(private readonly agencyService: AgencyService) {}

    @Get()
    getAgencies() {
        return this.agencyService.findAll();
    }

    @Get(':agencyId')
    getAgencyById(@Param() params: FindByIdParam) {
        return this.agencyService.findById(params.agencyId);
    }

    @Post()
    postAgency(@Body() body: CreateAgencyDto) {
        return this.agencyService.add(body);
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
