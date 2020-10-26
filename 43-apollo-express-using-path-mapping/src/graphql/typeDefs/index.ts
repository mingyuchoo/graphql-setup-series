import path from 'path';
import { loadFilesSync, mergeTypeDefs } from 'graphql-tools';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'), { recursive: true });

export default mergeTypeDefs(typesArray);
