import { Pool } from 'pg';
import { env } from '../config/env.config';

export const pool = new Pool({
  connectionString: ((env.DB_CONNECTION_STRING as string) + env.DATABASE_NAME) as string
});
