import './core/configs/aliases';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { customValidationPipe } from './core/pipes/custom-validation.pipe';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.use(helmet());
    app.enableCors();

    const swaggerOptions = new DocumentBuilder()
        .addServer(process.env.BASE_URI ?? '/')
        .setTitle('Trarepo API')
        .setDescription('全国公共交通機関データベース')
        .setVersion('v1')
        .build();

    const swagger = SwaggerModule.createDocument(app, swaggerOptions, {});
    SwaggerModule.setup('doc/v1', app, swagger);

    app.useGlobalPipes(customValidationPipe);

    await app.listen(3000);
}
bootstrap();
