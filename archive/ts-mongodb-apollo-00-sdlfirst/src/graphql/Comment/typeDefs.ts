import gql from 'graphql-tag';

export default gql`
  enum CommentScalarFieldEnum {
    _id
    title
    content
    postId
  }

  input CommentWhereInput {
    AND: [CommentWhereInput!]
    OR: [CommentWhereInput!]
    NOT: [CommentWhereInput!]
    _id: IntFilter
    title: StringFilter
    content: StringNullableFilter
    postId: IntNullableFilter
    post: PostWhereInput
  }

  input CommentOrderByInput {
    _id: SortOrder
    title: SortOrder
    content: SortOrder
    postId: SortOrder
  }

  input CommentWhereUniqueInput {
    _id: Int
  }

  input CommentCreateInput {
    title: String!
    content: String
    post: PostCreateOneWithoutCommentsInput
  }

  input CommentUpdateInput {
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
    post: PostUpdateOneWithoutCommentsInput
  }

  input CommentUpdateManyMutationInput {
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
  }

  input CommentListRelationFilter {
    every: CommentWhereInput
    some: CommentWhereInput
    none: CommentWhereInput
  }

  input CommentCreateManyWithoutPostInput {
    create: [CommentCreateWithoutPostInput!]
    connect: [CommentWhereUniqueInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutpostInput!]
  }

  input CommentUpdateManyWithoutPostInput {
    create: [CommentCreateWithoutPostInput!]
    connect: [CommentWhereUniqueInput!]
    set: [CommentWhereUniqueInput!]
    disconnect: [CommentWhereUniqueInput!]
    delete: [CommentWhereUniqueInput!]
    update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
    updateMany: [CommentUpdateManyWithWhereWithoutPostInput!]
    deleteMany: [CommentScalarWhereInput!]
    upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutpostInput!]
  }

  input CommentCreateWithoutPostInput {
    title: String!
    content: String
  }

  input CommentCreateOrConnectWithoutpostInput {
    where: CommentWhereUniqueInput!
    create: CommentCreateWithoutPostInput!
  }

  input CommentUpdateWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput!
    data: CommentUpdateWithoutPostInput!
  }

  input CommentUpdateManyWithWhereWithoutPostInput {
    where: CommentScalarWhereInput!
    data: CommentUpdateManyMutationInput!
  }

  input CommentScalarWhereInput {
    AND: [CommentScalarWhereInput!]
    OR: [CommentScalarWhereInput!]
    NOT: [CommentScalarWhereInput!]
    _id: IntFilter
    title: StringFilter
    content: StringNullableFilter
    postId: IntNullableFilter
  }

  input CommentUpsertWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput!
    update: CommentUpdateWithoutPostInput!
    create: CommentCreateWithoutPostInput!
  }

  input CommentUpdateWithoutPostInput {
    title: StringFieldUpdateOperationsInput
    content: NullableStringFieldUpdateOperationsInput
  }

  type AggregateComment {
    count: CommentCountAggregateOutputType
    avg: CommentAvgAggregateOutputType
    sum: CommentSumAggregateOutputType
    min: CommentMinAggregateOutputType
    max: CommentMaxAggregateOutputType
  }

  type CommentCountAggregateOutputType {
    _id: ID!
    title: Int
    content: Int
    postId: Int
    _all: Int!
  }

  type CommentAvgAggregateOutputType {
    _id: Float!
    postId: Float
  }

  type CommentSumAggregateOutputType {
    _id: ID!
    postId: Int
  }

  type CommentMinAggregateOutputType {
    _id: ID!
    title: String
    content: String
    postId: Int
  }

  type CommentMaxAggregateOutputType {
    _id: ID!
    title: String
    content: String
    postId: Int
  }

  type Query {
    findUniqueComment(where: CommentWhereUniqueInput!): Comment
    findFirstComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByInput!]
      cursor: CommentWhereUniqueInput
      distinct: CommentScalarFieldEnum
      skip: Int
      take: Int
    ): [Comment!]
    findManyComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByInput!]
      cursor: CommentWhereUniqueInput
      distinct: CommentScalarFieldEnum
      skip: Int
      take: Int
    ): [Comment!]
    findManyCommentCount(
      where: CommentWhereInput
      orderBy: [CommentOrderByInput!]
      cursor: CommentWhereUniqueInput
      distinct: CommentScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByInput!]
      cursor: CommentWhereUniqueInput
      distinct: CommentScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateComment
  }

  type Mutation {
    createOneComment(data: CommentCreateInput!): Comment!
    updateOneComment(where: CommentWhereUniqueInput!, data: CommentUpdateInput!): Comment!
    deleteOneComment(where: CommentWhereUniqueInput!): Comment
    upsertOneComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment
    deleteManyComment(where: CommentWhereInput): BatchPayload
    updateManyComment(where: CommentWhereInput, data: CommentUpdateManyMutationInput): BatchPayload
  }

  type Comment {
    _id: ID!
    title: String!
    content: String
    postId: Int
    post: Post
  }
`;
