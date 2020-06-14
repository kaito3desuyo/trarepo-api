import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/modules/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRoutingModule } from './core/modules/app-routing.module';

@Module({
    imports: [AppRoutingModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
