import { RouterModule, Routes } from 'nest-router';
import { Module } from '@nestjs/common';
import { ApiV1Module } from './api-v1.module';

const routes: Routes = [
    {
        path: '/v1',
        module: ApiV1Module,
    },
];

@Module({
    imports: [RouterModule.forRoutes(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
