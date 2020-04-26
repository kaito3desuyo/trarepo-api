import { Module } from '@nestjs/common';
import { AgencyV1Controller } from './presentation/agency.v1.controller';
import { AgencyService } from './usecase/agency.service';

@Module({
    controllers: [AgencyV1Controller],
    providers: [AgencyService],
})
export class AgencyV1Module {}
