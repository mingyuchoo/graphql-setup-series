import { GraphQLSchema } from 'graphql';
import { IResolvers, loadFilesSync, makeExecutableSchema, mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import path from 'path';

const typesDefArray = loadFilesSync(path.join(__dirname, './**/*.graphql'), { recursive: true });
const resolverArray: IResolvers[] = loadFilesSync(path.join(__dirname, './**/*.resolver.*'), { recursive: true });

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typesDefArray),
  resolvers: mergeResolvers(resolverArray),
});

export default schema;
