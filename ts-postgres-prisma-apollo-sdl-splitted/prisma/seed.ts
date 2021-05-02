import { PrismaClient } from '@prisma/client';
import faker from 'faker';
const prisma = new PrismaClient({});

async function main() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const title = faker.random.words();
  const content = faker.lorem.text();
  const bio = faker.name.jobTitle();
  const category = faker.random.word();
  const subtitle = faker.random.word();
  const message = faker.git.commitMessage();
  const keyword = faker.hacker.noun();
  const tag = faker.name.jobTitle();

  const user = await prisma.user.create({
    data: {
      email: String(Date.now()) + email,
      firstName: firstName + String(Date.now()),
      lastName: lastName + String(Date.now()),
      role: 'USER',
      profile: {
        create: {
          bio: bio,
        },
      },
      posts: {
        create: [
          {
            title: title,
            content: content,
            published: false,
            categories: {
              create: [
                {
                  name: category,
                },
              ],
            },
            comments: {
              create: [
                {
                  title: subtitle,
                  content: message,
                },
              ],
            },
            keywords: [keyword],
            tags: {
              create: [
                {
                  name: tag + String(Date.now()),
                },
              ],
            },
          },
        ],
      },
    },
  });
}

[...Array(10000)].map((value, index) => {
  main()
    .catch((e) => {
      console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
});
