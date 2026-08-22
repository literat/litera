import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// Uses connection pooling; migrations/direct-connection use is configured separately in prisma.config.ts
const adapter = new PrismaPg({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({ adapter });
} else {
  // @ts-expect-error -- global.prisma is not defined
  if (!global.prisma) {
    // @ts-expect-error -- global.prisma is not defined
    global.prisma = new PrismaClient({ adapter });
  }
  // @ts-expect-error -- global.prisma is not defined
  prisma = global.prisma;
}

export default prisma;
