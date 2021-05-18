import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });






















  // app.useGlobalPipes(new ValidationPipe({
  //
  //   // bedziemy dokladnie widziec co jest nie tak
  //   disableErrorMessages: true,
  //
  //   /// wszystko jest automatycznie sprawdzane z DTO jak cos wiecej to odrzuca
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  //
  //   /// nie trzeba zmienaic danych w @Param poniewaz automatycznie zamienia na te ktore potrzebujemy
  //   transform: true,
  //
  //
  //   /// do odbioru plikow
  //   transformOptions: {
  //     enableImplicitConversion: true,
  //   },
  //
  // }));

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
