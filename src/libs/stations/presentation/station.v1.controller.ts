import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('stations')
export class StationV1Controller {
    // constructor() {}

    @Get()
    getStations() {
        return 'hoge';
    }
}
