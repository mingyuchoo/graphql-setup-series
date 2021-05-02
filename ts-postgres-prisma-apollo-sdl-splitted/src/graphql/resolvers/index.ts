import { loadFilesSync, mergeResolvers } from 'graphql-tools';
import path from 'path';

const resolverArray = loadFilesSync(path.join(__dirname, './**/*.resolver.{ts,js}'), { recursive: true });

export default mergeResolvers(resolverArray);
