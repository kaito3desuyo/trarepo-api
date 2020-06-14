import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAgencyDto } from '../usecase/dtos/create-agency.dto';
import { AgencyService } from '../usecase/agency.service';
import { FindAgencyByIdParam } from '../usecase/params/find-agency-by-id.param';
import { UpdateAgencyDto } from '../usecase/dtos/update-agency.dto';
import { UpdateAgencyParam } from '../usecase/params/update-agency.param';
import { RemoveAgencyParam } from '../usecase/params/remove-agency.param';
import { FindManyAgencyQueryParam } from '../usecase/params/find-many-agency.query-param';
import { PaginationInterceptor } from '../../../core/interceptors/pagination.interceptor';

@Controller()
@ApiTags('agencies')
export class AgencyV1Controller {
    constructor(private readonly agencyService: AgencyService) {}

    @Get()
    @UseInterceptors(PaginationInterceptor)
    getAgencies(@Query() queries: FindManyAgencyQueryParam) {
        return this.agencyService.findMany(queries);
    }

    @Get(':agencyId')
    getAgencyById(@Param() params: FindAgencyByIdParam) {
        return this.agencyService.findById(params);
    }

    @Post()
    postAgency(@Body() body: CreateAgencyDto) {
        return this.agencyService.add(body);
    }

    @Put(':agencyId')
    putAgency(
        @Param() params: UpdateAgencyParam,
        @Body() body: UpdateAgencyDto,
    ) {
        return this.agencyService.update(params, body);
    }

    @Delete(':agencyId')
    deleteAgency(@Param() params: RemoveAgencyParam) {
        return this.agencyService.remove(params);
    }
}