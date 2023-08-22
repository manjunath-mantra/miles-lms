import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/route/api/v1/auth/auth.controller';
import { SupabaseService } from 'src/config/supabase/supabase.service';
import { JwtAuthService } from './jwt.service';
import { SupabaseModule } from 'src/config/supabase/supabase.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "mvjhjkvghjgcfhbxgfh" || process.env.JWT_SECRET, 
      signOptions: { expiresIn: '1h' },
    }),
    SupabaseModule
  ],
  controllers: [AuthController],
  providers: [SupabaseService,ConfigService,JwtAuthService],

})
export class AuthModule {}
