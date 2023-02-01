import { loadFilesSync } from 'graphql-tools';
import path from 'path';

const typeArray = loadFilesSync(path.join(__dirname, './**/*.type.{ts,js}'), { recursive: true });

export default typeArray;
