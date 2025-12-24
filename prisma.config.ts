import path from 'node:path';
import { defineConfig, env } from 'prisma/config';
import { config } from 'dotenv';

// Load .env.local for local development
config({ path: '.env.local' });

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),

  datasource: {
    url: env('POSTGRES_URL_NON_POOLING'),
  },
});
