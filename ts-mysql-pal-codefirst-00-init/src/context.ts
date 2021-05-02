import { onDeleteArgs, PrismaDelete } from '@paljs/plugins';
import { Prisma as PrismaTypes, PrismaClient } from '@prisma/client';

class Prisma extends PrismaClient {
  constructor(options?: PrismaTypes.PrismaClientOptions) {
    super(options);
  }

  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }
}

const prisma = new Prisma();

export interface Context {
  prisma: Prisma;
  select: any;
}

export function createContext(): Context {
  return {
    prisma,
    select: {},
  };
}
