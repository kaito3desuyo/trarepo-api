import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('agencies')
export class AgencyV1Controller {
    @Get()
    getAgencies() {
        return 'hoge';
    }

    @Post()
    postAgency() {
        return 'fuga';
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
