import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor(private readonly configService: ConfigService) {
    let supabase_url =  process.env.SUPABASE_URL
    let supabase_key = process.env.SUPABASE_KEY
    this.supabase = createClient(supabase_url, supabase_key);
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}
