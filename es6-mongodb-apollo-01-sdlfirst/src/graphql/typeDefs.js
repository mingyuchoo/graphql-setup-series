import { mergeTypeDefs } from '@graphql-tools/merge';

import User from './User/typeDefs';

export default mergeTypeDefs([User]);
