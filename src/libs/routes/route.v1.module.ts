import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteCommand } from './infrastructure/commands/route.command';
import { RouteModel } from './infrastructure/models/route.model';
import { RouteQuery } from './infrastructure/queries/route.query';
import { RouteV1Controller } from './presentation/route.v1.controller';
import { RouteService } from './usecase/route.service';

@Module({
    imports: [TypeOrmModule.forFeature([RouteModel])],
    controllers: [RouteV1Controller],
    providers: [RouteService, RouteCommand, RouteQuery],
})
export class RouteV1Module {}
