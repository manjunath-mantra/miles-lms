import { Module } from '@nestjs/common';
import { AuthModule } from 'src/config/jwt/jwt.module';
import { UserModule } from './user/user.module';
import { V1Controller } from './v1.controller';

@Module({
  controllers: [V1Controller],
  providers: [],
  exports: [],
  imports: [
    UserModule,
    AuthModule
  ],
})
export class V1Module {}