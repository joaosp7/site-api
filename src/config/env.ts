import * as dotenv from 'dotenv';
import * as z from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3000),
  DB_HOST: z.coerce.number().optional().default(5432),
  DEFAULT_DB: z.string(),
  DB_PASSWORD: z.string(),
  DB_USER: z.string().optional().default('postgres'),
  SECRET_TOKEN: z.string(),

});

const envParse = envSchema.safeParse(process.env);

if (!envParse?.success) {
  console.log('Env variables are missing.');
  console.log(envParse.error.message);
  throw new Error('Invalid ENV file');
}

export const env = envParse.data;
