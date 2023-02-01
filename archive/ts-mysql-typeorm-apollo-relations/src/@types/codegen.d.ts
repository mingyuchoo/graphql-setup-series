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
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts: Array<Post>;
};


export type CategoryPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type CategoryCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutCategoriesInput>;
};

export type CategoryCreateManyWithoutPostsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
};

export type CategoryCreateOrConnectWithoutpostsInput = {
  create: CategoryCreateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutPostsInput = {
  name: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
};

export type CategoryUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutCategoriesInput>;
};

export type CategoryUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutPostsInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type CategoryUpdateManyWithWhereWithoutPostsInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
  data: CategoryUpdateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
  create: CategoryCreateWithoutPostsInput;
  update: CategoryUpdateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  posts?: Maybe<PostListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  where?: Maybe<PostWhereInput>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  cursor?: Maybe<ProfileWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProfileOrderByInput>>;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  where?: Maybe<TagWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  where?: Maybe<UserWhereInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createComment: Comment;
  createPost: Post;
  createProfile: Profile;
  createTag: Tag;
  createUser: User;
  deleteCategories: BatchPayload;
  deleteCategory?: Maybe<Category>;
  deleteComment?: Maybe<Comment>;
  deleteComments: BatchPayload;
  deletePost?: Maybe<Post>;
  deletePosts: BatchPayload;
  deleteProfile?: Maybe<Profile>;
  deleteProfiles: BatchPayload;
  deleteTag?: Maybe<Tag>;
  deleteTags: BatchPayload;
  deleteUser?: Maybe<User>;
  deleteUsers: BatchPayload;
  updateCategories: BatchPayload;
  updateCategory?: Maybe<Category>;
  updateComment?: Maybe<Comment>;
  updateComments: BatchPayload;
  updatePost?: Maybe<Post>;
  updatePosts: BatchPayload;
  updateProfile?: Maybe<Profile>;
  updateProfiles: BatchPayload;
  updateTag?: Maybe<Tag>;
  updateTags: BatchPayload;
  updateUser?: Maybe<User>;
  updateUsers: BatchPayload;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteProfilesArgs = {
  where?: Maybe<ProfileWhereInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where?: Maybe<TagWhereInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateCategoriesArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateProfilesArgs = {
  data: ProfileUpdateManyMutationInput;
  where?: Maybe<ProfileWhereInput>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: TagUpdateManyMutationInput;
  where?: Maybe<TagWhereInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  post?: Maybe<Post>;
  title: Scalars['String'];
};

export type CommentCreateInput = {
  content?: Maybe<Scalars['String']>;
  post?: Maybe<PostCreateOneWithoutCommentsInput>;
  title: Scalars['String'];
};

export type CommentCreateManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
};

export type CommentCreateOrConnectWithoutpostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutPostInput = {
  content?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  content?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  title?: Maybe<StringFilter>;
};

export type CommentUpdateInput = {
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneWithoutCommentsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateWithoutPostInput = {
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  content?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  post?: Maybe<PostWhereInput>;
  title?: Maybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  categories: Array<Category>;
  comments: Array<Comment>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  keywords: Array<Scalars['String']>;
  published: Scalars['Boolean'];
  tags: Array<Tag>;
  title: Scalars['String'];
};


export type PostCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type PostTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PostCreateInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<PostCreatekeywordsInput>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
};

export type PostCreatekeywordsInput = {
  set: Array<Scalars['String']>;
};

export type PostCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
};

export type PostCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoriesInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
};

export type PostCreateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
};

export type PostCreateOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutauthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutcategoriesInput = {
  create: PostCreateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutcommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithouttagsInput = {
  create: PostCreateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<PostCreatekeywordsInput>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
};

export type PostCreateWithoutCategoriesInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<PostCreatekeywordsInput>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<PostCreatekeywordsInput>;
  published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
};

export type PostCreateWithoutTagsInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<PostCreatekeywordsInput>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  content?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableListFilter>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdatekeywordsInput = {
  set: Array<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoriesInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutCategoriesInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutAuthorInput = {
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCategoriesInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutTagsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  keywords?: Maybe<PostUpdatekeywordsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: PostUpdateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  data: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: PostCreateWithoutCategoriesInput;
  update: PostUpdateWithoutCategoriesInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  update: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
  categories?: Maybe<CategoryListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  content?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  keywords?: Maybe<StringNullableListFilter>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  published?: Maybe<BoolFilter>;
  tags?: Maybe<TagListRelationFilter>;
  title?: Maybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String'];
  id: Scalars['Int'];
  user: User;
};

export type ProfileCreateInput = {
  bio: Scalars['String'];
  user: UserCreateOneWithoutProfileInput;
};

export type ProfileCreateOneWithoutUserInput = {
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutuserInput>;
  create?: Maybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutuserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  bio: Scalars['String'];
};

export type ProfileOrderByInput = {
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileUpdateInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type ProfileUpdateManyMutationInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpdateOneWithoutUserInput = {
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutuserInput>;
  create?: Maybe<ProfileCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProfileUpdateWithoutUserInput>;
  upsert?: Maybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: Maybe<Array<ProfileWhereInput>>;
  bio?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type TagCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutTagsInput>;
};

export type TagCreateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
};

export type TagCreateOrConnectWithoutpostsInput = {
  create: TagCreateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutPostsInput = {
  name: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  name?: Maybe<SortOrder>;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
};

export type TagUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
};

export type TagUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutPostsInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type TagUpdateManyWithWhereWithoutPostsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  data: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  create: TagCreateWithoutPostsInput;
  update: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  posts?: Maybe<PostListRelationFilter>;
};

export type TagWhereUniqueInput = {
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  role: Role;
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  role?: Maybe<Role>;
};

export type UserCreateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOneWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
  create?: Maybe<UserCreateWithoutProfileInput>;
};

export type UserCreateOrConnectWithoutpostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutprofileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  role?: Maybe<Role>;
};

export type UserCreateWithoutProfileInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  role?: Maybe<Role>;
};

export type UserOrderByInput = {
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
  create?: Maybe<UserCreateWithoutProfileInput>;
  update?: Maybe<UserUpdateWithoutProfileInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutPostsInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserUpsertWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  update: UserUpdateWithoutProfileInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  posts?: Maybe<PostListRelationFilter>;
  profile?: Maybe<ProfileWhereInput>;
  role?: Maybe<EnumRoleFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};
