import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  DateTime: any;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type PostUniqueFilterInput = {
  id: Scalars['Int'];
};

export type PostFilterInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type PostSortInput = {
  id?: SortDirection;
};

export type Query = {
  __typename?: 'Query';
  feed: Array<Maybe<Post>>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  searchPosts: Array<Maybe<Post>>;
  searchUsers: Array<Maybe<User>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryPostArgs = {
  where: PostUniqueFilterInput;
};


export type QueryPostsArgs = {
  where: PostFilterInput;
  orderBy: PostSortInput;
  take: Scalars['Int'];
  skip: Scalars['Int'];
};


export type QuerySearchPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};


export type QuerySearchUsersArgs = {
  searchString?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  where: UserUniqueFilterInput;
};


export type QueryUsersArgs = {
  where: UserFilterInput;
  orderBy: UserSortInput;
  take: Scalars['Int'];
  skip: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPostByEmail?: Maybe<Post>;
  createUserByEmail: User;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  publish?: Maybe<Post>;
  updateOnePost?: Maybe<Post>;
  updateOneUser: User;
};


export type MutationCreatePostByEmailArgs = {
  email: Scalars['String'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};


export type MutationCreateUserByEmailArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteOnePostArgs = {
  where: PostUniqueFilterInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserUniqueFilterInput;
};


export type MutationPublishArgs = {
  where: PostUniqueFilterInput;
};


export type MutationUpdateOnePostArgs = {
  where: PostUniqueFilterInput;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};


export type MutationUpdateOneUserArgs = {
  where: UserUniqueFilterInput;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};




export type UserUniqueFilterInput = {
  id: Scalars['Int'];
};

export type UserFilterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type UserSortInput = {
  id?: SortDirection;
};

export type Subscription = {
  __typename?: 'Subscription';
  newUserJoined: User;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  SortDirection: SortDirection;
  Post: ResolverTypeWrapper<Post>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  User: ResolverTypeWrapper<User>;
  PostUniqueFilterInput: PostUniqueFilterInput;
  PostFilterInput: PostFilterInput;
  PostSortInput: PostSortInput;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  UserUniqueFilterInput: UserUniqueFilterInput;
  UserFilterInput: UserFilterInput;
  UserSortInput: UserSortInput;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Post: Post;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  User: User;
  PostUniqueFilterInput: PostUniqueFilterInput;
  PostFilterInput: PostFilterInput;
  PostSortInput: PostSortInput;
  Query: {};
  Mutation: {};
  Date: Scalars['Date'];
  Time: Scalars['Time'];
  DateTime: Scalars['DateTime'];
  UserUniqueFilterInput: UserUniqueFilterInput;
  UserFilterInput: UserFilterInput;
  UserSortInput: UserSortInput;
  Subscription: {};
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  feed?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'where'>>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryPostsArgs, 'where' | 'orderBy' | 'take' | 'skip'>>;
  searchPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QuerySearchPostsArgs, never>>;
  searchUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'where' | 'orderBy' | 'take' | 'skip'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPostByEmail?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostByEmailArgs, 'email' | 'title'>>;
  createUserByEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserByEmailArgs, 'email'>>;
  deleteOnePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationDeleteOnePostArgs, 'where'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  publish?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationPublishArgs, 'where'>>;
  updateOnePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdateOnePostArgs, 'where' | 'title'>>;
  updateOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'where' | 'email'>>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  newUserJoined?: SubscriptionResolver<ResolversTypes['User'], "newUserJoined", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Post?: PostResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Subscription?: SubscriptionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
