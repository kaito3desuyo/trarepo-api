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
import { CreateRouteDto } from '../usecase/dtos/create-route.dto';
import { RouteDetailsDto } from '../usecase/dtos/route-details.dto';
import { UpdateRouteDto } from '../usecase/dtos/update-route.dto';
import { FindManyRouteQueryParam } from '../usecase/params/find-many-route.query-param';
import { FindRouteByIdParam } from '../usecase/params/find-route-by-id.param';
import { RemoveRouteParam } from '../usecase/params/remove-route.param';
import { UpdateRouteParam } from '../usecase/params/update-route.param';
import { RouteService } from '../usecase/route.service';

@Controller()
@ApiTags('routes')
export class RouteV1Controller {
    constructor(private readonly routeService: RouteService) {}

    @Get()
    @UseInterceptors(PaginationInterceptor)
    @ApiOkResponse({ type: [RouteDetailsDto] })
    getRoutes(
        @Query() queries: FindManyRouteQueryParam,
    ): Promise<Pagination<RouteDetailsDto>> {
        return this.routeService.findMany(queries);
    }

    @Get(':routeId')
    getRouteById(
        @Param() params: FindRouteByIdParam,
    ): Promise<RouteDetailsDto> {
        return this.routeService.findById(params);
    }

    @Post()
    postRoute(@Body() body: CreateRouteDto): Promise<RouteDetailsDto> {
        return this.routeService.add(body);
    }

    @Put(':routeId')
    putRoute(
        @Param() params: UpdateRouteParam,
        @Body() body: UpdateRouteDto,
    ): Promise<RouteDetailsDto> {
        return this.routeService.update(params, body);
    }

    @Delete('routeId')
    deleteRoute(@Param() params: RemoveRouteParam): Promise<RouteDetailsDto> {
        return this.routeService.remove(params);
    }
}
