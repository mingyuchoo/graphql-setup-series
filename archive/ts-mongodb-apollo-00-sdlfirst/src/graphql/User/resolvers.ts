const resolvers = {
  Query: {
    async findManyUser(parent, args, context, info) {
      const users = await context.db.collection('user').find({}).toArray();
      return users;
    },
    async findUniqueUser(parent, args, context, info) {
      const user = await context.db.collection('user').findOne({ _id: args._id });
      return user;
    },
  },
  Mutation: {
    async createOneUser(parent, args, context, info) {
      const result = await context.db.collection('user').insertOne({
        firstName: args.firstName,
        lastName: args.lastName,
        blog: args.blog,
        start: Number(args.stars),
      });
      console.log(result.ops[0]);
      return result.ops[0];
    },
    async updateOneUser(parent, args, context, info) {
      try {
        const { modifiedCount } = await context.db.collection('user').updateOne(
          { _id: args._id },
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
    async deleteOneUser(parent, args, context, info) {
      try {
        const { deletedCount } = await context.db.collection('user').deleteOne({
          _id: args._id,
        });
        return deletedCount;
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default resolvers;
