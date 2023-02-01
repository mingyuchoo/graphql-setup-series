export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countPosts: Scalars['Int'];
  post: Post;
  posts: Array<Maybe<Post>>;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Scalars['Int'];
  createUser: User;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  age: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age: Scalars['Int'];
};
