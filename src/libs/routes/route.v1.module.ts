import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteModel } from './infrastructure/models/route.model';
import { RouteV1Controller } from './presentation/route.v1.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RouteModel])],
    controllers: [RouteV1Controller],
    providers: [],
})
export class RouteV1Module {}
