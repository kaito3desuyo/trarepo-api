import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PaginationInterceptor } from '@src/core/interceptors/pagination.interceptor';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateStationDto } from '../usecase/dtos/create-station.dto';
import { StationDetailsDto } from '../usecase/dtos/station-details.dto';
import { UpdateStationDto } from '../usecase/dtos/update-station.dto';
import { FindManyStationQueryParam } from '../usecase/params/find-many-station.query-param';
import { FindStationByIdParam } from '../usecase/params/find-station-by-id.param';
import { RemoveStationParam } from '../usecase/params/remove-station.param';
import { UpdateStationParam } from '../usecase/params/update-station.param';
import { StationService } from '../usecase/station.service';

@Controller()
@ApiTags('stations')
export class StationV1Controller {
    constructor(private readonly stationService: StationService) {}

    @Get()
    @UseInterceptors(PaginationInterceptor)
    @ApiOkResponse({ type: [StationDetailsDto] })
    getStations(
        @Query() queries: FindManyStationQueryParam,
    ): Promise<Pagination<StationDetailsDto>> {
        return this.stationService.findMany(queries);
    }

    @Get('/:stationId')
    getStationById(
        @Param() params: FindStationByIdParam,
    ): Promise<StationDetailsDto> {
        return this.stationService.findById(params.stationId);
    }

    @Post()
    postStation(@Body() body: CreateStationDto): Promise<StationDetailsDto> {
        return this.stationService.add(body);
    }

    @Put('/:stationId')
    putStation(
        @Param() params: UpdateStationParam,
        @Body() body: UpdateStationDto,
    ): Promise<StationDetailsDto> {
        return this.stationService.update(params, body);
    }

    @Delete('/:stationId')
    deleteStation(
        @Param() params: RemoveStationParam,
    ): Promise<StationDetailsDto> {
        return this.stationService.remove(params.stationId);
    }
}
