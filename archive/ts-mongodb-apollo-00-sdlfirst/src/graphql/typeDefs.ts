import { mergeTypeDefs } from '@graphql-tools/merge';

import All from './All/typeDefs';
import Category from './Category/typeDefs';
import Comment from './Comment/typeDefs';
import Post from './Post/typeDefs';
import Profile from './Profile/typeDefs';
import Tag from './Tag/typeDefs';
import User from './User/typeDefs';

export default mergeTypeDefs([All, Category, Comment, Post, Profile, Tag, User]);
