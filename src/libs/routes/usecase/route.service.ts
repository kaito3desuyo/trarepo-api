import { Injectable, NotFoundException } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { RouteCommand } from '../infrastructure/commands/route.command';
import { RouteQuery } from '../infrastructure/queries/route.query';
import { RouteDomainBuilder } from './builders/route-domain.builder';
import { CreateRouteDto } from './dtos/create-route.dto';
import { RouteDetailsDto } from './dtos/route-details.dto';
import { UpdateRouteDto } from './dtos/update-route.dto';
import { FindManyRouteQueryParam } from './params/find-many-route.query-param';
import { FindRouteByIdParam } from './params/find-route-by-id.param';
import { RemoveRouteParam } from './params/remove-route.param';
import { UpdateRouteParam } from './params/update-route.param';

@Injectable()
export class RouteService {
    constructor(
        private readonly routeCommand: RouteCommand,
        private readonly routeQuery: RouteQuery,
    ) {}

    async findAll(): Promise<RouteDetailsDto[]> {
        return this.routeQuery.findAll();
    }

    async findMany(
        params: FindManyRouteQueryParam,
    ): Promise<Pagination<RouteDetailsDto>> {
        return this.routeQuery.findMany({
            pageIndex: params.page,
            pageSize: params.per,
        });
    }

    async findById(params: FindRouteByIdParam): Promise<RouteDetailsDto> {
        const result = await this.routeQuery.findById(params.routeId);

        if (!result) {
            throw new NotFoundException('Route not found.');
        }

        return result;
    }

    async add(dto: CreateRouteDto): Promise<RouteDetailsDto> {
        const domain = new RouteDomainBuilder(dto).build();
        const result = await this.routeCommand.save(domain);
        return result[0];
    }

    async update(
        params: UpdateRouteParam,
        dto: UpdateRouteDto,
    ): Promise<RouteDetailsDto> {
        const target = await this.routeQuery.findById(params.routeId);

        if (!target) {
            throw new NotFoundException('Route not found.');
        }

        const domain = new RouteDomainBuilder(target).build();
        domain.updateDetails(new RouteDomainBuilder(dto).getProps());

        const result = await this.routeCommand.save(domain);
        return result[0];
    }

    async remove(params: RemoveRouteParam): Promise<RouteDetailsDto> {
        const target = await this.routeQuery.findById(params.routeId);

        if (!target) {
            throw new NotFoundException('Route not found.');
        }

        const domain = new RouteDomainBuilder(target).build();
        const result = await this.routeCommand.remove(domain);
        return result[0];
    }
}
