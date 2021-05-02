import gql from 'graphql-tag';

export default gql`
  enum PostScalarFieldEnum {
    _id
    createdAt
    title
    content
    published
    authorId
    keywords
  }

  input PostRelationFilter {
    is: PostWhereInput
    isNot: PostWhereInput
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    _id: IntFilter
    createdAt: DateTimeFilter
    title: StringFilter
    content: StringNullableFilter
    published: BoolFilter
    authorId: IntNullableFilter
    author: UserWhereInput
    categories: CategoryListRelationFilter
    comments: CommentListRelationFilter
    keywords: StringFilter
    tags: TagListRelationFilter
  }

  input PostOrderByInput {
    _id: SortOrder
    createdAt: SortOrder
    title: SortOrder
    content: SortOrder
    published: SortOrder
    authorId: SortOrder
    keywords: SortOrder
  }

  input PostWhereUniqueInput {
    _id: Int
  }

  input PostCreateInput {
    createdAt: DateTime
    title: String!
    content: String
    published: Boolean
    keywords: String!
    author: UserCreateOneWithoutPostsInput
    categories: CategoryCreateManyWithoutPostsInput
    comments: CommentCreateManyWithoutPostInput
    tags: TagCreateManyWithoutPostsInput
  }

  input PostUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsInput
    categories: CategoryUpdateManyWithoutPostsInput
    comments: CommentUpdateManyWithoutPostInput
    tags: TagUpdateManyWithoutPostsInput
  }

  input PostUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
  }

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input PostCreateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
    connectOrCreate: [PostCreateOrConnectWithoutauthorInput!]
  }

  input PostUpdateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutauthorInput!]
  }

  input PostCreateManyWithoutCategoriesInput {
    create: [PostCreateWithoutCategoriesInput!]
    connect: [PostWhereUniqueInput!]
    connectOrCreate: [PostCreateOrConnectWithoutcategoriesInput!]
  }

  input PostUpdateManyWithoutCategoriesInput {
    create: [PostCreateWithoutCategoriesInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutCategoriesInput!]
    updateMany: [PostUpdateManyWithWhereWithoutCategoriesInput!]
    deleteMany: [PostScalarWhereInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutCategoriesInput!]
    connectOrCreate: [PostCreateOrConnectWithoutcategoriesInput!]
  }

  input PostCreateOneWithoutCommentsInput {
    create: PostCreateWithoutCommentsInput
    connect: PostWhereUniqueInput
    connectOrCreate: PostCreateOrConnectWithoutcommentsInput
  }

  input PostUpdateOneWithoutCommentsInput {
    create: PostCreateWithoutCommentsInput
    connect: PostWhereUniqueInput
    disconnect: Boolean
    delete: Boolean
    update: PostUpdateWithoutCommentsInput
    upsert: PostUpsertWithoutCommentsInput
    connectOrCreate: PostCreateOrConnectWithoutcommentsInput
  }

  input PostCreateManyWithoutTagsInput {
    create: [PostCreateWithoutTagsInput!]
    connect: [PostWhereUniqueInput!]
    connectOrCreate: [PostCreateOrConnectWithouttagsInput!]
  }

  input PostUpdateManyWithoutTagsInput {
    create: [PostCreateWithoutTagsInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutTagsInput!]
    updateMany: [PostUpdateManyWithWhereWithoutTagsInput!]
    deleteMany: [PostScalarWhereInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutTagsInput!]
    connectOrCreate: [PostCreateOrConnectWithouttagsInput!]
  }

  input PostCreateWithoutAuthorInput {
    createdAt: DateTime
    title: String!
    content: String
    published: Boolean
    keywords: String!
    categories: CategoryCreateManyWithoutPostsInput
    comments: CommentCreateManyWithoutPostInput
    tags: TagCreateManyWithoutPostsInput
  }

  input PostCreateOrConnectWithoutauthorInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutAuthorInput!
  }

  input PostUpdateManyWithWhereWithoutAuthorInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyMutationInput!
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
    _id: IntFilter
    createdAt: DateTimeFilter
    title: StringFilter
    content: StringNullableFilter
    published: BoolFilter
    authorId: IntNullableFilter
    keywords: StringFilter
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutAuthorInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostCreateWithoutCategoriesInput {
    createdAt: DateTime
    title: String!
    content: String
    published: Boolean
    keywords: String!
    author: UserCreateOneWithoutPostsInput
    comments: CommentCreateManyWithoutPostInput
    tags: TagCreateManyWithoutPostsInput
  }

  input PostCreateOrConnectWithoutcategoriesInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutCategoriesInput!
  }

  input PostUpdateWithWhereUniqueWithoutCategoriesInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutCategoriesInput!
  }

  input PostUpdateManyWithWhereWithoutCategoriesInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyMutationInput!
  }

  input PostUpsertWithWhereUniqueWithoutCategoriesInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutCategoriesInput!
    create: PostCreateWithoutCategoriesInput!
  }

  input PostCreateWithoutCommentsInput {
    createdAt: DateTime
    title: String!
    content: String
    published: Boolean
    keywords: String!
    author: UserCreateOneWithoutPostsInput
    categories: CategoryCreateManyWithoutPostsInput
    tags: TagCreateManyWithoutPostsInput
  }

  input PostCreateOrConnectWithoutcommentsInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutCommentsInput!
  }

  input PostUpdateWithoutCommentsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsInput
    categories: CategoryUpdateManyWithoutPostsInput
    tags: TagUpdateManyWithoutPostsInput
  }

  input PostUpsertWithoutCommentsInput {
    update: PostUpdateWithoutCommentsInput!
    create: PostCreateWithoutCommentsInput!
  }

  input PostCreateWithoutTagsInput {
    createdAt: DateTime
    title: String!
    content: String
    published: Boolean
    keywords: String!
    author: UserCreateOneWithoutPostsInput
    categories: CategoryCreateManyWithoutPostsInput
    comments: CommentCreateManyWithoutPostInput
  }

  input PostCreateOrConnectWithouttagsInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutTagsInput!
  }

  input PostUpdateWithWhereUniqueWithoutTagsInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutTagsInput!
  }

  input PostUpdateManyWithWhereWithoutTagsInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyMutationInput!
  }

  input PostUpsertWithWhereUniqueWithoutTagsInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutTagsInput!
    create: PostCreateWithoutTagsInput!
  }

  input PostUpdateWithoutAuthorInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
    categories: CategoryUpdateManyWithoutPostsInput
    comments: CommentUpdateManyWithoutPostInput
    tags: TagUpdateManyWithoutPostsInput
  }

  input PostUpdateWithoutCategoriesInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsInput
    comments: CommentUpdateManyWithoutPostInput
    tags: TagUpdateManyWithoutPostsInput
  }

  input PostUpdateWithoutTagsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    keywords: StringFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsInput
    categories: CategoryUpdateManyWithoutPostsInput
    comments: CommentUpdateManyWithoutPostInput
  }

  type PostCountAggregateOutputType {
    _id: ID!
    createdAt: Int
    title: Int
    content: Int
    published: Int
    authorId: Int
    keywords: Int
    _all: Int!
  }

  type PostAvgAggregateOutputType {
    _id: Float!
    authorId: Float
  }

  type PostSumAggregateOutputType {
    _id: ID!
    authorId: Int
  }

  type PostMinAggregateOutputType {
    _id: ID!
    createdAt: DateTime
    title: String
    content: String
    published: Boolean
    authorId: Int
    keywords: String
  }

  type PostMaxAggregateOutputType {
    _id: ID!
    createdAt: DateTime
    title: String
    content: String
    published: Boolean
    authorId: Int
    keywords: String
  }

  type AggregatePost {
    count: PostCountAggregateOutputType
    avg: PostAvgAggregateOutputType
    sum: PostSumAggregateOutputType
    min: PostMinAggregateOutputType
    max: PostMaxAggregateOutputType
  }

  type Post {
    _id: ID!
    createdAt: DateTime!
    title: String!
    content: String
    published: Boolean!
    authorId: Int
    author: User
    categories(
      where: CategoryWhereInput
      orderBy: CategoryOrderByInput
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: CategoryScalarFieldEnum
    ): [Category!]!
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByInput
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: CommentScalarFieldEnum
    ): [Comment!]!
    keywords: String!
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      cursor: TagWhereUniqueInput
      take: Int
      skip: Int
      distinct: TagScalarFieldEnum
    ): [Tag!]!
  }

  type Query {
    findUniquePost(where: PostWhereUniqueInput!): Post
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): [Post!]
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): [Post!]
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): AggregatePost
  }

  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(where: PostWhereUniqueInput!, data: PostUpdateInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(where: PostWhereInput, data: PostUpdateManyMutationInput): BatchPayload
  }
`;
