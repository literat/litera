import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'src/database/schema.prisma',
  migrations: {
    path: 'src/database/migrations',
    seed: 'tsx src/database/seed.ts',
  },
  datasource: {
    // Uses a direct (non-pooled) connection, required for Migrate; runtime queries use
    // the pooled POSTGRES_PRISMA_URL via the driver adapter in src/database/client.ts.
    // Read directly (not via the `env()` helper) so commands that don't touch the
    // database, e.g. `prisma generate`, don't fail when this is unset in CI.
    url: process.env.POSTGRES_URL_NON_POOLING,
  },
});
