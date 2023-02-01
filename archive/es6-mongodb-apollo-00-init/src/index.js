import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

import dotenv from 'dotenv';
dotenv.config();

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    insertUser(firstName: String!, lastName: String!, blog: String, stars: Int): User!
    updateUser(id: ID!, firstName: String!, lastName: String!, blog: String, stars: Int): Int!
    deleteUser(id: ID!): Int!
  }
`;

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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

let db;

const server = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.DATABASE_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) await dbClient.connect();
        db = dbClient.db('test'); // database name
      } catch (e) {
        console.log('--->error while connecting via graphql context (db)', e);
      }
    }

    return { db };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
