import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { StationModel } from '../infrastructure/models/station.model';
import { Repository } from 'typeorm';
import { CreateStationDto } from '../usecase/dtos/create-station.dto';
import { StationService } from '../usecase/station.service';

@Controller()
@ApiTags('stations')
export class StationV1Controller {
    constructor(
        @InjectRepository(StationModel)
        private readonly repository: Repository<StationModel>,
        private readonly stationService: StationService,
    ) {}

    @Get()
    getStations() {
        return this.repository.save([
            {
                stationName: 'hoge',
                stationSubName: 'hoge',
                stationType: 1,
                stationDescription: 'jhoge',
                stationLatLng: {
                    type: 'Point',
                    coordinates: [135, 35],
                },
                stationUrl: 'http',
            },
        ]);
    }

    @Post()
    postStation(@Body() body: CreateStationDto) {
        return this.stationService.add(body);
    }
}
