import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStationDto } from '../usecase/dtos/create-station.dto';
import { StationService } from '../usecase/station.service';

@Controller()
@ApiTags('stations')
export class StationV1Controller {
    constructor(private readonly stationService: StationService) {}

    @Get()
    getStations() {
        return this.stationService.findMany();
    }

    @Post()
    postStation(@Body() body: CreateStationDto) {
        return this.stationService.add(body);
    }
}
