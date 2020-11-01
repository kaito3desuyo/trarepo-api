import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { RouteDetailsDto } from '../../usecase/dtos/route-details.dto';
import { IRouteQuery } from '../../usecase/queries/route-query.interface';
import { FindManyRouteQueryObject } from '../../usecase/query-objects/find-many-route.query-object';
import { RouteDtoBuilder } from '../builders/route-dto.builder';
import { RouteModel } from '../models/route.model';

@Injectable()
export class RouteQuery implements IRouteQuery {
    constructor(
        @InjectRepository(RouteModel)
        private readonly repository: Repository<RouteModel>,
    ) {}

    async findAll(): Promise<RouteDetailsDto[]> {
        const result = await this.repository.find();
        return result.map((o) => new RouteDtoBuilder(o).build());
    }

    async findMany(
        qo: FindManyRouteQueryObject,
    ): Promise<Pagination<RouteDetailsDto>> {
        const result = await paginate<RouteModel>(this.repository, {
            page: qo.pageIndex,
            limit: qo.pageSize,
        });

        const data: Pagination<RouteDetailsDto> = new Pagination<
            RouteDetailsDto
        >(
            result.items.map((o) => new RouteDtoBuilder(o).build()),
            result.meta,
            result.links,
        );

        return data;
    }

    async findById(id: string): Promise<RouteDetailsDto> {
        const result = await this.repository.findOne({
            where: {
                id,
            },
        });

        if (!result) {
            return null;
        }

        return new RouteDtoBuilder(result).build();
    }
}
