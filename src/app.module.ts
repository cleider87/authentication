import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GlobalModule } from './common/global.module';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GlobalModule, HealthModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
