import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/modules/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRoutingModule } from './core/modules/app-routing.module';
import { ApiV1Module } from './core/modules/api-v1.module';

@Module({
    imports: [AppRoutingModule, DatabaseModule, ApiV1Module],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
