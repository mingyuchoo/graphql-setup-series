import { v4 as uuidv4 } from 'uuid';

const resolvers = {
  Query: {
    async users(parent, args, context, info) {
      const users = await context.db.collection('users').find({}).toArray();
      return users;
    },
    async user(parent, args, context, info) {
      const user = await context.db.collection('users').findOne({ id: args.id });
      return user;
    },
  },
  Mutation: {
    async insertUser(parent, args, context, info) {
      const result = await context.db.collection('users').insertOne({
        id: uuidv4(),
        firstName: args.firstName,
        lastName: args.lastName,
        blog: args.blog,
        start: Number(args.stars),
      });
      console.log(result.ops[0]);
      return result.ops[0];
    },
    async updateUser(parent, args, context, info) {
      try {
        const { modifiedCount } = await context.db.collection('users').updateOne(
          { id: args.id },
          {
            $set: {
              firstName: args.firstName,
              lastName: args.lastName,
              blog: args.blog,
              start: Number(args.stars),
            },
          }
        );
        return modifiedCount;
      } catch (e) {
        console.log(e);
      }
    },
    async deleteUser(parent, args, context, info) {
      try {
        const { deletedCount } = await context.db.collection('users').deleteOne({
          id: args.id,
        });
        return deletedCount;
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default resolvers;
