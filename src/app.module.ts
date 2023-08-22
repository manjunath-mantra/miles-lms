

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import  { Appdatasource } from './data-source';
import { RouterModule } from '@nestjs/core';
import { APIModule } from './route/api/api.module';
import { APIRoutes } from './route/api/api.route';
import { PassportModule } from '@nestjs/passport';
import { SupabaseModule } from './config/supabase/supabase.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(Appdatasource),
    RouterModule.register([
      {
        path: 'api',
        module: APIModule,
        children: APIRoutes,
      },
    ]),
    TypeOrmModule.forFeature([User]),
    PassportModule,
    SupabaseModule,
    JwtModule,
    AuthModule,
    APIModule
  ],
})
export class AppModule {}

