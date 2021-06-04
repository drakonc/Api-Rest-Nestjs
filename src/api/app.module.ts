import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { Configuration } from './config/config.key';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { HttpErrorFilter } from '@functions/http-erro.filter';
import { LoggingInterceptor } from '@functions/logging.interceptor';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule],
  providers: [
    { provide: APP_FILTER, useClass: HttpErrorFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }

}
