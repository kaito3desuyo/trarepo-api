import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/modules/database.module';
import { RouterModule, Routes } from 'nest-router';

const routes: Routes = [];

@Module({
    imports: [RouterModule.forRoutes(routes), DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
