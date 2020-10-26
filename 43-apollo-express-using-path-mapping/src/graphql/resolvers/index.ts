import path from 'path';
import { loadFilesSync, mergeResolvers } from 'graphql-tools';

const resolverArray = loadFilesSync(path.join(__dirname, './**/*.resolver.{ts,js}'), { recursive: true });

export default mergeResolvers(resolverArray);
