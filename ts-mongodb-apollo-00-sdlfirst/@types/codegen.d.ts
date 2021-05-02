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


export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Role = 'role'
}

export enum ProfileScalarFieldEnum {
  Id = 'id',
  Bio = 'bio',
  UserId = 'userId'
}

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Title = 'title',
  Content = 'content',
  Published = 'published',
  AuthorId = 'authorId',
  Keywords = 'keywords'
}

export enum CategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export enum CommentScalarFieldEnum {
  Id = 'id',
  Title = 'title',
  Content = 'content',
  PostId = 'postId'
}

export enum TagScalarFieldEnum {
  Name = 'name'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  profile?: Maybe<ProfileWhereInput>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type ProfileWhereInput = {
  AND?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  id?: Maybe<IntFilter>;
  bio?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
};

export type ProfileOrderByInput = {
  id?: Maybe<SortOrder>;
  bio?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  authorId?: Maybe<IntNullableFilter>;
  author?: Maybe<UserWhereInput>;
  categories?: Maybe<CategoryListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  keywords?: Maybe<StringFilter>;
  tags?: Maybe<TagListRelationFilter>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  keywords?: Maybe<SortOrder>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type CategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  postId?: Maybe<IntNullableFilter>;
  post?: Maybe<PostWhereInput>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type TagOrderByInput = {
  name?: Maybe<SortOrder>;
};

export type TagWhereUniqueInput = {
  name?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role?: Maybe<Role>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type ProfileCreateInput = {
  bio: Scalars['String'];
  user: UserCreateOneWithoutProfileInput;
};

export type ProfileUpdateInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type ProfileUpdateManyMutationInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  keywords: Scalars['String'];
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
};

export type PostUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutCategoriesInput>;
};

export type CategoryUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutCategoriesInput>;
};

export type CategoryUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentCreateInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  post?: Maybe<PostCreateOneWithoutCommentsInput>;
};

export type CommentUpdateInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagCreateInput = {
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutTagsInput>;
};

export type TagUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
};

export type TagUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type ProfileRelationFilter = {
  is?: Maybe<ProfileWhereInput>;
  isNot?: Maybe<ProfileWhereInput>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export type ProfileCreateOneWithoutUserInput = {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutuserInput>;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutauthorInput>>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type ProfileUpdateOneWithoutUserInput = {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProfileUpdateWithoutUserInput>;
  upsert?: Maybe<ProfileUpsertWithoutUserInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutuserInput>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutauthorInput>>;
};

export type UserCreateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutProfileInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

export type CategoryCreateManyWithoutPostsInput = {
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutpostsInput>>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type TagCreateManyWithoutPostsInput = {
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

export type CategoryUpdateManyWithoutPostsInput = {
  create?: Maybe<Array<CategoryCreateWithoutPostsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutPostsInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutpostsInput>>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type TagUpdateManyWithoutPostsInput = {
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutPostsInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
};

export type PostCreateManyWithoutCategoriesInput = {
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoriesInput>>;
};

export type PostUpdateManyWithoutCategoriesInput = {
  create?: Maybe<Array<PostCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutCategoriesInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoriesInput>>;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostUpdateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostCreateManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type ProfileCreateWithoutUserInput = {
  bio: Scalars['String'];
};

export type ProfileCreateOrConnectWithoutuserInput = {
  where: ProfileWhereUniqueInput;
  create: ProfileCreateWithoutUserInput;
};

export type PostCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  keywords: Scalars['String'];
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
};

export type PostCreateOrConnectWithoutauthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type ProfileUpdateWithoutUserInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  update: ProfileUpdateWithoutUserInput;
  create: ProfileCreateWithoutUserInput;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  authorId?: Maybe<IntNullableFilter>;
  keywords?: Maybe<StringFilter>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type UserCreateWithoutProfileInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role?: Maybe<Role>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateOrConnectWithoutprofileInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutProfileInput;
};

export type UserUpdateWithoutProfileInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileInput;
  create: UserCreateWithoutProfileInput;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role?: Maybe<Role>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
};

export type UserCreateOrConnectWithoutpostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type CategoryCreateWithoutPostsInput = {
  name: Scalars['String'];
};

export type CategoryCreateOrConnectWithoutpostsInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutPostsInput;
};

export type CommentCreateWithoutPostInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type CommentCreateOrConnectWithoutpostInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPostInput;
};

export type TagCreateWithoutPostsInput = {
  name: Scalars['String'];
};

export type TagCreateOrConnectWithoutpostsInput = {
  where: TagWhereUniqueInput;
  create: TagCreateWithoutPostsInput;
};

export type UserUpdateWithoutPostsInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutPostsInput;
};

export type CategoryUpdateManyWithWhereWithoutPostsInput = {
  where: CategoryScalarWhereInput;
  data: CategoryUpdateManyMutationInput;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
};

export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutPostsInput;
  create: CategoryCreateWithoutPostsInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  postId?: Maybe<IntNullableFilter>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostInput;
  create: CommentCreateWithoutPostInput;
};

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutPostsInput;
};

export type TagUpdateManyWithWhereWithoutPostsInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyMutationInput;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  name?: Maybe<StringFilter>;
};

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutPostsInput;
  create: TagCreateWithoutPostsInput;
};

export type PostCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  keywords: Scalars['String'];
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
};

export type PostCreateOrConnectWithoutcategoriesInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCategoriesInput;
};

export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutCategoriesInput;
};

export type PostUpdateManyWithWhereWithoutCategoriesInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutCategoriesInput;
  create: PostCreateWithoutCategoriesInput;
};

export type PostCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  keywords: Scalars['String'];
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
};

export type PostCreateOrConnectWithoutcommentsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCommentsInput;
};

export type PostUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsInput;
  create: PostCreateWithoutCommentsInput;
};

export type PostCreateWithoutTagsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  keywords: Scalars['String'];
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  categories?: Maybe<CategoryCreateManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type PostCreateOrConnectWithouttagsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutTagsInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutTagsInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutTagsInput;
  create: PostCreateWithoutTagsInput;
};

export type PostUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
};

export type CategoryUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutPostsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCategoriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
};

export type PostUpdateWithoutTagsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  keywords?: Maybe<StringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregateOutputType>;
  avg?: Maybe<UserAvgAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
};

export type AggregateProfile = {
  __typename?: 'AggregateProfile';
  count?: Maybe<ProfileCountAggregateOutputType>;
  avg?: Maybe<ProfileAvgAggregateOutputType>;
  sum?: Maybe<ProfileSumAggregateOutputType>;
  min?: Maybe<ProfileMinAggregateOutputType>;
  max?: Maybe<ProfileMaxAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count?: Maybe<PostCountAggregateOutputType>;
  avg?: Maybe<PostAvgAggregateOutputType>;
  sum?: Maybe<PostSumAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  count?: Maybe<CategoryCountAggregateOutputType>;
  avg?: Maybe<CategoryAvgAggregateOutputType>;
  sum?: Maybe<CategorySumAggregateOutputType>;
  min?: Maybe<CategoryMinAggregateOutputType>;
  max?: Maybe<CategoryMaxAggregateOutputType>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  count?: Maybe<CommentCountAggregateOutputType>;
  avg?: Maybe<CommentAvgAggregateOutputType>;
  sum?: Maybe<CommentSumAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  count?: Maybe<TagCountAggregateOutputType>;
  min?: Maybe<TagMinAggregateOutputType>;
  max?: Maybe<TagMaxAggregateOutputType>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  id: Scalars['Int'];
  email?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id: Scalars['Int'];
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type ProfileCountAggregateOutputType = {
  __typename?: 'ProfileCountAggregateOutputType';
  id: Scalars['Int'];
  bio?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ProfileAvgAggregateOutputType = {
  __typename?: 'ProfileAvgAggregateOutputType';
  id: Scalars['Float'];
  userId: Scalars['Float'];
};

export type ProfileSumAggregateOutputType = {
  __typename?: 'ProfileSumAggregateOutputType';
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProfileMinAggregateOutputType = {
  __typename?: 'ProfileMinAggregateOutputType';
  id: Scalars['Int'];
  bio?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type ProfileMaxAggregateOutputType = {
  __typename?: 'ProfileMaxAggregateOutputType';
  id: Scalars['Int'];
  bio?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type PostAvgAggregateOutputType = {
  __typename?: 'PostAvgAggregateOutputType';
  id: Scalars['Float'];
  authorId?: Maybe<Scalars['Float']>;
};

export type PostSumAggregateOutputType = {
  __typename?: 'PostSumAggregateOutputType';
  id: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
};

export type CategoryCountAggregateOutputType = {
  __typename?: 'CategoryCountAggregateOutputType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CategoryAvgAggregateOutputType = {
  __typename?: 'CategoryAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type CategorySumAggregateOutputType = {
  __typename?: 'CategorySumAggregateOutputType';
  id: Scalars['Int'];
};

export type CategoryMinAggregateOutputType = {
  __typename?: 'CategoryMinAggregateOutputType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type CategoryMaxAggregateOutputType = {
  __typename?: 'CategoryMaxAggregateOutputType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  id: Scalars['Int'];
  title?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  id: Scalars['Float'];
  postId?: Maybe<Scalars['Float']>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  id: Scalars['Int'];
  postId?: Maybe<Scalars['Int']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
};

export type TagCountAggregateOutputType = {
  __typename?: 'TagCountAggregateOutputType';
  name?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type TagMinAggregateOutputType = {
  __typename?: 'TagMinAggregateOutputType';
  name?: Maybe<Scalars['String']>;
};

export type TagMaxAggregateOutputType = {
  __typename?: 'TagMaxAggregateOutputType';
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role: Role;
  profile?: Maybe<Profile>;
  posts: Array<Post>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PostScalarFieldEnum>;
};

export type Query = {
  __typename?: 'Query';
  findUniqueUser?: Maybe<User>;
  findFirstUser?: Maybe<Array<User>>;
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  aggregateUser?: Maybe<AggregateUser>;
  findUniqueProfile?: Maybe<Profile>;
  findFirstProfile?: Maybe<Array<Profile>>;
  findManyProfile?: Maybe<Array<Profile>>;
  findManyProfileCount: Scalars['Int'];
  aggregateProfile?: Maybe<AggregateProfile>;
  findUniquePost?: Maybe<Post>;
  findFirstPost?: Maybe<Array<Post>>;
  findManyPost?: Maybe<Array<Post>>;
  findManyPostCount: Scalars['Int'];
  aggregatePost?: Maybe<AggregatePost>;
  findUniqueCategory?: Maybe<Category>;
  findFirstCategory?: Maybe<Array<Category>>;
  findManyCategory?: Maybe<Array<Category>>;
  findManyCategoryCount: Scalars['Int'];
  aggregateCategory?: Maybe<AggregateCategory>;
  findUniqueComment?: Maybe<Comment>;
  findFirstComment?: Maybe<Array<Comment>>;
  findManyComment?: Maybe<Array<Comment>>;
  findManyCommentCount: Scalars['Int'];
  aggregateComment?: Maybe<AggregateComment>;
  findUniqueTag?: Maybe<Tag>;
  findFirstTag?: Maybe<Array<Tag>>;
  findManyTag?: Maybe<Array<Tag>>;
  findManyTagCount: Scalars['Int'];
  aggregateTag?: Maybe<AggregateTag>;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserCountArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryFindFirstProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<ProfileOrderByInput>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<ProfileOrderByInput>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyProfileCountArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<ProfileOrderByInput>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<ProfileOrderByInput>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostCountArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindFirstCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCategoryCountArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindFirstCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCommentCountArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryFindFirstTagArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<TagScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyTagArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<TagScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyTagCountArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<TagScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateTagArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<TagScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  updateOneUser: User;
  deleteOneUser?: Maybe<User>;
  upsertOneUser?: Maybe<User>;
  deleteManyUser?: Maybe<BatchPayload>;
  updateManyUser?: Maybe<BatchPayload>;
  createOneProfile: Profile;
  updateOneProfile: Profile;
  deleteOneProfile?: Maybe<Profile>;
  upsertOneProfile?: Maybe<Profile>;
  deleteManyProfile?: Maybe<BatchPayload>;
  updateManyProfile?: Maybe<BatchPayload>;
  createOnePost: Post;
  updateOnePost: Post;
  deleteOnePost?: Maybe<Post>;
  upsertOnePost?: Maybe<Post>;
  deleteManyPost?: Maybe<BatchPayload>;
  updateManyPost?: Maybe<BatchPayload>;
  createOneCategory: Category;
  updateOneCategory: Category;
  deleteOneCategory?: Maybe<Category>;
  upsertOneCategory?: Maybe<Category>;
  deleteManyCategory?: Maybe<BatchPayload>;
  updateManyCategory?: Maybe<BatchPayload>;
  createOneComment: Comment;
  updateOneComment: Comment;
  deleteOneComment?: Maybe<Comment>;
  upsertOneComment?: Maybe<Comment>;
  deleteManyComment?: Maybe<BatchPayload>;
  updateManyComment?: Maybe<BatchPayload>;
  createOneTag: Tag;
  updateOneTag: Tag;
  deleteOneTag?: Maybe<Tag>;
  upsertOneTag?: Maybe<Tag>;
  deleteManyTag?: Maybe<BatchPayload>;
  updateManyTag?: Maybe<BatchPayload>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  data?: Maybe<UserUpdateManyMutationInput>;
};


export type MutationCreateOneProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationUpdateOneProfileArgs = {
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateInput;
};


export type MutationDeleteOneProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertOneProfileArgs = {
  where: ProfileWhereUniqueInput;
  create: ProfileCreateInput;
  update: ProfileUpdateInput;
};


export type MutationDeleteManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
};


export type MutationUpdateManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  data?: Maybe<ProfileUpdateManyMutationInput>;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdateOnePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  data?: Maybe<PostUpdateManyMutationInput>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
};


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
  data?: Maybe<CategoryUpdateManyMutationInput>;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationUpdateOneCommentArgs = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  where: CommentWhereUniqueInput;
  create: CommentCreateInput;
  update: CommentUpdateInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  data?: Maybe<CommentUpdateManyMutationInput>;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationUpdateOneTagArgs = {
  where: TagWhereUniqueInput;
  data: TagUpdateInput;
};


export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  where: TagWhereUniqueInput;
  create: TagCreateInput;
  update: TagUpdateInput;
};


export type MutationDeleteManyTagArgs = {
  where?: Maybe<TagWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  where?: Maybe<TagWhereInput>;
  data?: Maybe<TagUpdateManyMutationInput>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['Int'];
  bio: Scalars['String'];
  userId: Scalars['Int'];
  user: User;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  authorId?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  categories: Array<Category>;
  comments: Array<Comment>;
  keywords: Scalars['String'];
  tags: Array<Tag>;
};


export type PostCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<CommentScalarFieldEnum>;
};


export type PostTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  cursor?: Maybe<TagWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<TagScalarFieldEnum>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts: Array<Post>;
};


export type CategoryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PostScalarFieldEnum>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  posts: Array<Post>;
};


export type TagPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PostScalarFieldEnum>;
};
