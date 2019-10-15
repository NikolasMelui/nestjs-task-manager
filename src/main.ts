import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Task manager')
    .setDescription('Task manager API documentation')
    .setVersion('1.0.1')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = 3000;

  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
