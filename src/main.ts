import './core/configs/aliases';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { customValidationPipe } from './core/pipes/custom-validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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
