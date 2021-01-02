import { Module } from '@nestjs/common';
import { AgencyV1Module } from '../../libs/agencies/agency.v1.module';
import { Routes, RouterModule } from 'nest-router';
import { StationV1Module } from '@src/libs/stations/station.v1.module';
import { RouteV1Module } from '@src/libs/routes/route.v1.module';

const routes: Routes = [
    {
        path: '/v1',
        children: [
            {
                path: '/agencies',
                module: AgencyV1Module,
            },

            {
                path: '/stations',
                module: StationV1Module,
            },

            {
                path: '/routes',
                module: RouteV1Module,
            },
        ],
    },
];

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        AgencyV1Module,
        StationV1Module,
        RouteV1Module,
    ],
    exports: [RouterModule],
})
export class ApiV1Module {}
