import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error -- global.prisma is not defined
  if (!global.prisma) {
    // @ts-expect-error -- global.prisma is not defined
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error -- global.prisma is not defined
  prisma = global.prisma;
}

export default prisma;
