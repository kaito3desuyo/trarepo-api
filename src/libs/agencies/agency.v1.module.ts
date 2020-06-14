import { Module } from '@nestjs/common';
import { AgencyV1Controller } from './presentation/agency.v1.controller';
import { AgencyService } from './usecase/agency.service';
import { AgencyCommand } from './infrastructure/commands/agency.command';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyModel } from './infrastructure/models/agency.model';
import { AgencyQuery } from './infrastructure/queries/agency.query';

@Module({
    imports: [TypeOrmModule.forFeature([AgencyModel])],
    controllers: [AgencyV1Controller],
    providers: [AgencyService, AgencyCommand, AgencyQuery],
})
export class AgencyV1Module {}
