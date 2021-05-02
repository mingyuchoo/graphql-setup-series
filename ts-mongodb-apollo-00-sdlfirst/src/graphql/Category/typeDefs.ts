import gql from 'graphql-tag';

export default gql`
  enum CategoryScalarFieldEnum {
    _id
    name
  }

  input CategoryWhereInput {
    AND: [CategoryWhereInput!]
    OR: [CategoryWhereInput!]
    NOT: [CategoryWhereInput!]
    _id: IntFilter
    name: StringFilter
    posts: PostListRelationFilter
  }

  input CategoryOrderByInput {
    _id: SortOrder
    name: SortOrder
  }

  input CategoryWhereUniqueInput {
    _id: Int
  }

  input CategoryCreateInput {
    name: String!
    posts: PostCreateManyWithoutCategoriesInput
  }

  input CategoryUpdateInput {
    name: StringFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutCategoriesInput
  }

  input CategoryUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
  }

  input CategoryListRelationFilter {
    every: CategoryWhereInput
    some: CategoryWhereInput
    none: CategoryWhereInput
  }

  input CategoryCreateManyWithoutPostsInput {
    create: [CategoryCreateWithoutPostsInput!]
    connect: [CategoryWhereUniqueInput!]
    connectOrCreate: [CategoryCreateOrConnectWithoutpostsInput!]
  }

  input CategoryUpdateManyWithoutPostsInput {
    create: [CategoryCreateWithoutPostsInput!]
    connect: [CategoryWhereUniqueInput!]
    set: [CategoryWhereUniqueInput!]
    disconnect: [CategoryWhereUniqueInput!]
    delete: [CategoryWhereUniqueInput!]
    update: [CategoryUpdateWithWhereUniqueWithoutPostsInput!]
    updateMany: [CategoryUpdateManyWithWhereWithoutPostsInput!]
    deleteMany: [CategoryScalarWhereInput!]
    upsert: [CategoryUpsertWithWhereUniqueWithoutPostsInput!]
    connectOrCreate: [CategoryCreateOrConnectWithoutpostsInput!]
  }

  input CategoryCreateWithoutPostsInput {
    name: String!
  }

  input CategoryCreateOrConnectWithoutpostsInput {
    where: CategoryWhereUniqueInput!
    create: CategoryCreateWithoutPostsInput!
  }

  input CategoryUpdateWithWhereUniqueWithoutPostsInput {
    where: CategoryWhereUniqueInput!
    data: CategoryUpdateWithoutPostsInput!
  }

  input CategoryUpdateManyWithWhereWithoutPostsInput {
    where: CategoryScalarWhereInput!
    data: CategoryUpdateManyMutationInput!
  }

  input CategoryScalarWhereInput {
    AND: [CategoryScalarWhereInput!]
    OR: [CategoryScalarWhereInput!]
    NOT: [CategoryScalarWhereInput!]
    _id: IntFilter
    name: StringFilter
  }

  input CategoryUpsertWithWhereUniqueWithoutPostsInput {
    where: CategoryWhereUniqueInput!
    update: CategoryUpdateWithoutPostsInput!
    create: CategoryCreateWithoutPostsInput!
  }

  input CategoryUpdateWithoutPostsInput {
    name: StringFieldUpdateOperationsInput
  }

  type AggregateCategory {
    count: CategoryCountAggregateOutputType
    avg: CategoryAvgAggregateOutputType
    sum: CategorySumAggregateOutputType
    min: CategoryMinAggregateOutputType
    max: CategoryMaxAggregateOutputType
  }

  type CategoryCountAggregateOutputType {
    _id: ID!
    name: Int
    _all: Int!
  }

  type CategoryAvgAggregateOutputType {
    _id: Float!
  }

  type CategorySumAggregateOutputType {
    _id: ID!
  }

  type CategoryMinAggregateOutputType {
    _id: ID!
    name: String
  }

  type CategoryMaxAggregateOutputType {
    _id: ID!
    name: String
  }

  type Category {
    _id: ID!
    name: String!
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: PostScalarFieldEnum
    ): [Post!]!
  }

  type Query {
    findUniqueCategory(where: CategoryWhereUniqueInput!): Category
    findFirstCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByInput!]
      cursor: CategoryWhereUniqueInput
      distinct: CategoryScalarFieldEnum
      skip: Int
      take: Int
    ): [Category!]
    findManyCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByInput!]
      cursor: CategoryWhereUniqueInput
      distinct: CategoryScalarFieldEnum
      skip: Int
      take: Int
    ): [Category!]
    findManyCategoryCount(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByInput!]
      cursor: CategoryWhereUniqueInput
      distinct: CategoryScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByInput!]
      cursor: CategoryWhereUniqueInput
      distinct: CategoryScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateCategory
  }

  type Mutation {
    createOneCategory(data: CategoryCreateInput!): Category!
    updateOneCategory(where: CategoryWhereUniqueInput!, data: CategoryUpdateInput!): Category!
    deleteOneCategory(where: CategoryWhereUniqueInput!): Category
    upsertOneCategory(
      where: CategoryWhereUniqueInput!
      create: CategoryCreateInput!
      update: CategoryUpdateInput!
    ): Category
    deleteManyCategory(where: CategoryWhereInput): BatchPayload
    updateManyCategory(where: CategoryWhereInput, data: CategoryUpdateManyMutationInput): BatchPayload
  }
`;
