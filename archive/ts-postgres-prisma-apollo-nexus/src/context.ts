import { PrismaClient } from '@prisma/client';

import { Context } from './types';

// PrismaClient 객체는 유일해야 하므로, createContext() 함수 안에서 생성하면 안 된다.
// while true; do ps aux | grep query-engine | wc -l; sleep 1; done 명령어를 실행했을 때 process가 늘어나면 안 된다.
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

export function createContext(): Context {
  return { prisma };
}
