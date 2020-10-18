import { Module } from '@nestjs/common';
import { RouteV1Controller } from './presentation/route.v1.controller';

@Module({
    controllers: [RouteV1Controller],
    providers: [],
})
export class RouteV1Module {}
