import { loadFilesSync, mergeTypeDefs } from 'graphql-tools';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'), { recursive: true });

export default mergeTypeDefs(typesArray);
