import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationModel } from './infrastructure/models/station.model';
import { StationV1Controller } from './presentation/station.v1.controller';

@Module({
    imports: [TypeOrmModule.forFeature([StationModel])],
    controllers: [StationV1Controller],
    providers: [],
})
export class StationV1Module {}
