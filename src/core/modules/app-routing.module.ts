import { Module } from '@nestjs/common';
import { ApiV1Module } from './api-v1.module';

@Module({
    imports: [ApiV1Module],
})
export class AppRoutingModule {}
