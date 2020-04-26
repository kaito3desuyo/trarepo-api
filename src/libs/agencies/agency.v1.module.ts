import { Module } from '@nestjs/common';
import { AgencyV1Controller } from './presentation/agency.v1.controller';

@Module({
    controllers: [AgencyV1Controller],
    providers: [],
})
export class AgencyV1Module {}
