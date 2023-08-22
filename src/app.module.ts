

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import  { Appdatasource } from 'src/config/database/data-source';
import { APIModule } from 'src/route/api/api.module';
import { APIRoutes } from 'src/route/api/api.route';
import { SupabaseModule } from 'src/config/supabase/supabase.module';
import { AuthModule } from 'src/config/jwt/jwt.module';
import { AllEntities } from 'src/constant/database/model';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    TypeOrmModule.forFeature(AllEntities),
    TypeOrmModule.forRoot(Appdatasource),
    RouterModule.register([
      {
        path: 'api',
        module: APIModule,
        children: APIRoutes,
      },
    ]),
    PassportModule,
    SupabaseModule,
    JwtModule,
    AuthModule,
    APIModule
  ],
})
export class AppModule {}

