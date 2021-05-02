import gql from 'graphql-tag';

export default gql`
  enum TagScalarFieldEnum {
    name
  }

  input TagWhereInput {
    AND: [TagWhereInput!]
    OR: [TagWhereInput!]
    NOT: [TagWhereInput!]
    name: StringFilter
    posts: PostListRelationFilter
  }

  input TagOrderByInput {
    name: SortOrder
  }

  input TagWhereUniqueInput {
    name: String
  }

  input TagCreateInput {
    name: String!
    posts: PostCreateManyWithoutTagsInput
  }

  input TagUpdateInput {
    name: StringFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutTagsInput
  }

  input TagUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
  }

  input TagListRelationFilter {
    every: TagWhereInput
    some: TagWhereInput
    none: TagWhereInput
  }

  input TagCreateManyWithoutPostsInput {
    create: [TagCreateWithoutPostsInput!]
    connect: [TagWhereUniqueInput!]
    connectOrCreate: [TagCreateOrConnectWithoutpostsInput!]
  }

  input TagUpdateManyWithoutPostsInput {
    create: [TagCreateWithoutPostsInput!]
    connect: [TagWhereUniqueInput!]
    set: [TagWhereUniqueInput!]
    disconnect: [TagWhereUniqueInput!]
    delete: [TagWhereUniqueInput!]
    update: [TagUpdateWithWhereUniqueWithoutPostsInput!]
    updateMany: [TagUpdateManyWithWhereWithoutPostsInput!]
    deleteMany: [TagScalarWhereInput!]
    upsert: [TagUpsertWithWhereUniqueWithoutPostsInput!]
    connectOrCreate: [TagCreateOrConnectWithoutpostsInput!]
  }

  input TagCreateWithoutPostsInput {
    name: String!
  }

  input TagCreateOrConnectWithoutpostsInput {
    where: TagWhereUniqueInput!
    create: TagCreateWithoutPostsInput!
  }

  input TagUpdateWithWhereUniqueWithoutPostsInput {
    where: TagWhereUniqueInput!
    data: TagUpdateWithoutPostsInput!
  }

  input TagUpdateManyWithWhereWithoutPostsInput {
    where: TagScalarWhereInput!
    data: TagUpdateManyMutationInput!
  }

  input TagScalarWhereInput {
    AND: [TagScalarWhereInput!]
    OR: [TagScalarWhereInput!]
    NOT: [TagScalarWhereInput!]
    name: StringFilter
  }

  input TagUpsertWithWhereUniqueWithoutPostsInput {
    where: TagWhereUniqueInput!
    update: TagUpdateWithoutPostsInput!
    create: TagCreateWithoutPostsInput!
  }

  input TagUpdateWithoutPostsInput {
    name: StringFieldUpdateOperationsInput
  }

  type TagCountAggregateOutputType {
    name: Int
    _all: Int!
  }

  type TagMinAggregateOutputType {
    name: String
  }

  type TagMaxAggregateOutputType {
    name: String
  }

  type AggregateTag {
    count: TagCountAggregateOutputType
    min: TagMinAggregateOutputType
    max: TagMaxAggregateOutputType
  }

  type Tag {
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
    findUniqueTag(where: TagWhereUniqueInput!): Tag
    findFirstTag(
      where: TagWhereInput
      orderBy: [TagOrderByInput!]
      cursor: TagWhereUniqueInput
      distinct: TagScalarFieldEnum
      skip: Int
      take: Int
    ): [Tag!]
    findManyTag(
      where: TagWhereInput
      orderBy: [TagOrderByInput!]
      cursor: TagWhereUniqueInput
      distinct: TagScalarFieldEnum
      skip: Int
      take: Int
    ): [Tag!]
    findManyTagCount(
      where: TagWhereInput
      orderBy: [TagOrderByInput!]
      cursor: TagWhereUniqueInput
      distinct: TagScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateTag(
      where: TagWhereInput
      orderBy: [TagOrderByInput!]
      cursor: TagWhereUniqueInput
      distinct: TagScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateTag
  }

  type Mutation {
    createOneTag(data: TagCreateInput!): Tag!
    updateOneTag(where: TagWhereUniqueInput!, data: TagUpdateInput!): Tag!
    deleteOneTag(where: TagWhereUniqueInput!): Tag
    upsertOneTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag
    deleteManyTag(where: TagWhereInput): BatchPayload
    updateManyTag(where: TagWhereInput, data: TagUpdateManyMutationInput): BatchPayload
  }
`;
