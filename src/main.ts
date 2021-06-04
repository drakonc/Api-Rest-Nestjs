import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { SwaggerTarget } from './swApi/optSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const port = AppModule.port;
  const sw = new SwaggerTarget(app);
  sw.Start();
  await app.listen(port, () => {
    Logger.log(`Corriendo en el Puerto: ${port}`, 'AppModule', false);
  });
}
bootstrap();
