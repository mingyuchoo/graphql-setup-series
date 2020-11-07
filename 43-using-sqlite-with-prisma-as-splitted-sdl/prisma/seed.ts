import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: 'alice1234',
      email: 'alice@email.com',
      posts: {
        create: [
          {
            title: 'My first post',
            content: 'I am very proud of me.',
            published: false,
          },
        ],
      },
    },
  });
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
