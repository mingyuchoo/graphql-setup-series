import dotenv from 'dotenv';
import faker from 'faker';
import mongoose from 'mongoose';

import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';

dotenv.config();

const DATABASE_URL = 'mongodb://test:test@localhost:27017/test';

mongoose
  .connect(process.env.DATABASE_URL || DATABASE_URL, {
    autoIndex: true,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: true,
    keepAliveInitialDelay: 120,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch((err: string) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  });

mongoose.set('useCreateIndex', true);

[...Array(2000)].map((value, index) => {
  User.create(
    new User({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      role: 'USER',
    }),
    (err, user) => {
      if (err) console.log(user);
      const user_id = user['_id'];
      Post.create(
        new Post({
          title: faker.lorem.word(),
          content: faker.lorem.words(),
          published: true,
          author: user_id,
          categories: [faker.lorem.word()],
          keywords: [faker.lorem.word()],
          tags: [faker.lorem.word()],
        }),
        (err, post) => {
          if (err) console.log(post);
          const post_id = post['_id'];
          Comment.create(
            new Comment({
              body: post_id,
              text: faker.random.words(),
              writer: user_id,
              reply: user_id,
            }),
            (err, comment) => {
              if (err) console.log(comment);
            }
          );
        }
      );
    }
  );
});
