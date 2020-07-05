import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
    UnprocessableEntityException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStationDto } from '../usecase/dtos/create-station.dto';
import { StationService } from '../usecase/station.service';
import { GetStationByIdParam } from './params/get-station-by-id.param';
import { PutStationParam } from './params/put-station.param';
import { UpdateStationDto } from '../usecase/dtos/update-station.dto';

@Controller()
@ApiTags('stations')
export class StationV1Controller {
    constructor(private readonly stationService: StationService) {}

    @Get()
    getStations() {
        return this.stationService.findMany();
    }

    @Get('/:stationId')
    getStationById(@Param() params: GetStationByIdParam) {
        return this.stationService.findOne(params.stationId);
    }

    @Post()
    postStation(@Body() body: CreateStationDto) {
        return this.stationService.add(body);
    }

    @Put('/:stationId')
    putStation(
        @Param() params: PutStationParam,
        @Body() body: UpdateStationDto,
    ) {
        if (params.stationId !== body.stationId) {
            throw new UnprocessableEntityException(
                'params.stationId and body.stationId are different.',
            );
        }

        return this.stationService.update(body);
    }
}
