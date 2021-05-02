import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
  ],
});

// Log formatting
prisma.$on('query', (e) => {
  e.timestamp;
  e.query;
  e.params;
  e.duration;
  e.target;
  console.log(e);
});
prisma.$on('info', (e) => {
  e.timestamp;
  e.message;
  e.target;
  console.log(e);
});
prisma.$on('warn', (e) => {
  e.timestamp;
  e.message;
  e.target;
  console.log(e);
});

export interface Context {
  prisma: PrismaClient;
}

export function createContext(): Context {
  return { prisma };
}
