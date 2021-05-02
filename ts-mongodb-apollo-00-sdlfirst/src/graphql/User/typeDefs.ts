import gql from 'graphql-tag';

export default gql`
  enum UserScalarFieldEnum {
    _id
    email
    firstName
    lastName
    role
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    _id: IntFilter
    email: StringFilter
    firstName: StringFilter
    lastName: StringFilter
    role: EnumRoleFilter
    profile: ProfileWhereInput
    posts: PostListRelationFilter
  }

  input UserOrderByInput {
    _id: SortOrder
    email: SortOrder
    firstName: SortOrder
    lastName: SortOrder
    role: SortOrder
  }

  input UserWhereUniqueInput {
    _id: Int
    email: String
  }

  input UserCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    role: Role
    profile: ProfileCreateOneWithoutUserInput
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserUpdateInput {
    email: StringFieldUpdateOperationsInput
    firstName: StringFieldUpdateOperationsInput
    lastName: StringFieldUpdateOperationsInput
    role: EnumRoleFieldUpdateOperationsInput
    profile: ProfileUpdateOneWithoutUserInput
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyMutationInput {
    email: StringFieldUpdateOperationsInput
    firstName: StringFieldUpdateOperationsInput
    lastName: StringFieldUpdateOperationsInput
    role: EnumRoleFieldUpdateOperationsInput
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input UserCreateOneWithoutProfileInput {
    create: UserCreateWithoutProfileInput
    connect: UserWhereUniqueInput
    connectOrCreate: UserCreateOrConnectWithoutprofileInput
  }

  input UserUpdateOneRequiredWithoutProfileInput {
    create: UserCreateWithoutProfileInput
    connect: UserWhereUniqueInput
    update: UserUpdateWithoutProfileInput
    upsert: UserUpsertWithoutProfileInput
    connectOrCreate: UserCreateOrConnectWithoutprofileInput
  }

  input UserCreateOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connect: UserWhereUniqueInput
    connectOrCreate: UserCreateOrConnectWithoutpostsInput
  }

  input UserUpdateOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connect: UserWhereUniqueInput
    disconnect: Boolean
    delete: Boolean
    update: UserUpdateWithoutPostsInput
    upsert: UserUpsertWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutpostsInput
  }

  input UserCreateWithoutProfileInput {
    email: String!
    firstName: String!
    lastName: String!
    role: Role
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserCreateOrConnectWithoutprofileInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutProfileInput!
  }

  input UserUpdateWithoutProfileInput {
    email: StringFieldUpdateOperationsInput
    firstName: StringFieldUpdateOperationsInput
    lastName: StringFieldUpdateOperationsInput
    role: EnumRoleFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpsertWithoutProfileInput {
    update: UserUpdateWithoutProfileInput!
    create: UserCreateWithoutProfileInput!
  }

  input UserCreateWithoutPostsInput {
    email: String!
    firstName: String!
    lastName: String!
    role: Role
    profile: ProfileCreateOneWithoutUserInput
  }

  input UserCreateOrConnectWithoutpostsInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutPostsInput!
  }

  input UserUpdateWithoutPostsInput {
    email: StringFieldUpdateOperationsInput
    firstName: StringFieldUpdateOperationsInput
    lastName: StringFieldUpdateOperationsInput
    role: EnumRoleFieldUpdateOperationsInput
    profile: ProfileUpdateOneWithoutUserInput
  }

  input UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsInput!
    create: UserCreateWithoutPostsInput!
  }

  type UserCountAggregateOutputType {
    _id: ID!
    email: Int
    firstName: Int
    lastName: Int
    role: Int
    _all: Int!
  }

  type UserAvgAggregateOutputType {
    _id: Float!
  }

  type UserSumAggregateOutputType {
    _id: ID!
  }

  type UserMinAggregateOutputType {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    role: Role
  }

  type UserMaxAggregateOutputType {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    role: Role
  }

  type AggregateUser {
    count: UserCountAggregateOutputType
    avg: UserAvgAggregateOutputType
    sum: UserSumAggregateOutputType
    min: UserMinAggregateOutputType
    max: UserMaxAggregateOutputType
  }

  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    role: Role!
    profile: Profile
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
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateUser
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(where: UserWhereInput, data: UserUpdateManyMutationInput): BatchPayload
  }
`;
