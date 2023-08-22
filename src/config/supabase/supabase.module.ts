import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthService } from 'src/config/jwt/jwt.service';
import { SupabaseService } from './supabase.service';

@Module({
  imports: [ConfigModule],
  providers: [SupabaseService,JwtAuthService,JwtService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
