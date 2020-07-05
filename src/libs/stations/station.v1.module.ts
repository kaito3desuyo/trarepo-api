import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationModel } from './infrastructure/models/station.model';
import { StationV1Controller } from './presentation/station.v1.controller';
import { StationService } from './usecase/station.service';
import { StationCommand } from './infrastructure/commands/station.command';
import { StationQuery } from './infrastructure/queries/station.query';

@Module({
    imports: [TypeOrmModule.forFeature([StationModel])],
    controllers: [StationV1Controller],
    providers: [StationService, StationCommand, StationQuery],
})
export class StationV1Module {}
