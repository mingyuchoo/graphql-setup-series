const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});
async function main() {
  const alice = await prisma.user.create({
    data: {
      username: 'alice1234',
      email: 'alice@email.com',
      firstName: 'Alice',
      lastName: 'Brown',
      isAdmin: false,
      role: 'USER',
      posts: {
        create: [
          {
            title: 'My first post',
            published: false,
            categories: { create: [{ name: 'diary' }] },
            comments: { create: [{ title: 'Hi', content: 'Nice to see you.' }] },
            tags: { create: [{ name: 'first' }] },
          },
          {
            title: 'All about database',
            published: true,
            categories: { create: [{ name: 'tech' }] },
            comments: { create: [{ title: 'Good subject', content: 'I wanna know DB.' }] },
            tags: { create: [{ name: 'database' }] },
          },
          {
            title: 'Prisma Day 2020',
            published: false,
            categories: { create: [{ name: 'event' }] },
            comments: { create: [{ title: 'Awesome', content: 'Very excited' }] },
            tags: { create: [{ name: 'prisma' }] },
          },
        ],
      },
      profile: { create: { bio: "Hi, I'm Alice" } },
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
