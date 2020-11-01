import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isArray } from 'lodash';
import { Repository } from 'typeorm';
import { Route } from '../../domain/route';
import { IRouteCommand } from '../../usecase/commands/route-command.interface';
import { RouteDetailsDto } from '../../usecase/dtos/route-details.dto';
import { RouteDtoBuilder } from '../builders/route-dto.builder';
import { RouteModelBuilder } from '../builders/route-model.builder';
import { RouteModel } from '../models/route.model';

@Injectable()
export class RouteCommand implements IRouteCommand {
    constructor(
        @InjectRepository(RouteModel)
        private readonly repository: Repository<RouteModel>,
    ) {}

    async save(route: Route | Route[]): Promise<RouteDetailsDto[]> {
        const data = isArray(route) ? route : [route];

        const models = data.map((o) => {
            const builder = new RouteModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.save(models);
        return result.map((o) => new RouteDtoBuilder(o).build());
    }

    async remove(route: Route | Route[]): Promise<RouteDetailsDto[]> {
        const data = isArray(route) ? route : [route];

        const models = data.map((o) => {
            const builder = new RouteModelBuilder();
            o.notify(builder);
            return builder.build();
        });

        const result = await this.repository.remove(models);
        return result.map((o) => new RouteDtoBuilder(o).build());
    }
}
