import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const swaggerOptions = new DocumentBuilder()
        .setTitle('Trarepo API')
        .setDescription('全国公共交通機関データベース')
        .build();

    const swagger = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('doc', app, swagger);

    await app.listen(3000);
}
bootstrap();
