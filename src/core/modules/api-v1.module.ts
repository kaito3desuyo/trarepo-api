import { Module } from '@nestjs/common';
import { AgencyV1Module } from '../../libs/agencies/agency.v1.module';
import { Routes, RouterModule } from 'nest-router';

const routes: Routes = [
    {
        path: '/v1',
        children: [
            {
                path: '/agencies',
                module: AgencyV1Module,
            },
        ],
    },
];

@Module({
    imports: [RouterModule.forRoutes(routes), AgencyV1Module],
    exports: [RouterModule],
})
export class ApiV1Module {}
