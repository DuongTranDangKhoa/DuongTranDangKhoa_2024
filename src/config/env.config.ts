import dotenv from 'dotenv';

dotenv.config();

export const env = {
  // import all env variables
  PORT: process.env.PORT as string,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING as string,
  DATABASE_NAME: process.env.DATABASE_NAME as string,
  SUPABASE_URL: process.env.SUPABASE_URL as string,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY as string
};
