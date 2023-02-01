import gql from 'graphql-tag';

export default gql`
  enum ProfileScalarFieldEnum {
    _id
    bio
    userId
  }

  input ProfileWhereInput {
    AND: [ProfileWhereInput!]
    OR: [ProfileWhereInput!]
    NOT: [ProfileWhereInput!]
    _id: IntFilter
    bio: StringFilter
    userId: IntFilter
    user: UserWhereInput
  }

  input ProfileOrderByInput {
    _id: SortOrder
    bio: SortOrder
    userId: SortOrder
  }

  input ProfileWhereUniqueInput {
    _id: Int
  }

  input ProfileCreateInput {
    bio: String!
    user: UserCreateOneWithoutProfileInput!
  }

  input ProfileUpdateInput {
    bio: StringFieldUpdateOperationsInput
    user: UserUpdateOneRequiredWithoutProfileInput
  }

  input ProfileUpdateManyMutationInput {
    bio: StringFieldUpdateOperationsInput
  }

  input ProfileRelationFilter {
    is: ProfileWhereInput
    isNot: ProfileWhereInput
  }

  input ProfileCreateOneWithoutUserInput {
    create: ProfileCreateWithoutUserInput
    connect: ProfileWhereUniqueInput
    connectOrCreate: ProfileCreateOrConnectWithoutuserInput
  }

  input ProfileUpdateOneWithoutUserInput {
    create: ProfileCreateWithoutUserInput
    connect: ProfileWhereUniqueInput
    disconnect: Boolean
    delete: Boolean
    update: ProfileUpdateWithoutUserInput
    upsert: ProfileUpsertWithoutUserInput
    connectOrCreate: ProfileCreateOrConnectWithoutuserInput
  }

  input ProfileCreateWithoutUserInput {
    bio: String!
  }

  input ProfileCreateOrConnectWithoutuserInput {
    where: ProfileWhereUniqueInput!
    create: ProfileCreateWithoutUserInput!
  }

  input ProfileUpdateWithoutUserInput {
    bio: StringFieldUpdateOperationsInput
  }

  input ProfileUpsertWithoutUserInput {
    update: ProfileUpdateWithoutUserInput!
    create: ProfileCreateWithoutUserInput!
  }

  type AggregateProfile {
    count: ProfileCountAggregateOutputType
    avg: ProfileAvgAggregateOutputType
    sum: ProfileSumAggregateOutputType
    min: ProfileMinAggregateOutputType
    max: ProfileMaxAggregateOutputType
  }

  type ProfileCountAggregateOutputType {
    _id: ID!
    bio: Int
    userId: Int!
    _all: Int!
  }

  type ProfileAvgAggregateOutputType {
    _id: Float!
    userId: Float!
  }

  type ProfileSumAggregateOutputType {
    _id: ID!
    userId: Int!
  }

  type ProfileMinAggregateOutputType {
    _id: ID!
    bio: String
    userId: Int!
  }

  type ProfileMaxAggregateOutputType {
    _id: ID!
    bio: String
    userId: Int!
  }

  type Profile {
    _id: ID!
    bio: String!
    userId: Int!
    user: User!
  }

  type Query {
    findUniqueProfile(where: ProfileWhereUniqueInput!): Profile
    findFirstProfile(
      where: ProfileWhereInput
      orderBy: [ProfileOrderByInput!]
      cursor: ProfileWhereUniqueInput
      distinct: ProfileScalarFieldEnum
      skip: Int
      take: Int
    ): [Profile!]
    findManyProfile(
      where: ProfileWhereInput
      orderBy: [ProfileOrderByInput!]
      cursor: ProfileWhereUniqueInput
      distinct: ProfileScalarFieldEnum
      skip: Int
      take: Int
    ): [Profile!]
    findManyProfileCount(
      where: ProfileWhereInput
      orderBy: [ProfileOrderByInput!]
      cursor: ProfileWhereUniqueInput
      distinct: ProfileScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateProfile(
      where: ProfileWhereInput
      orderBy: [ProfileOrderByInput!]
      cursor: ProfileWhereUniqueInput
      distinct: ProfileScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateProfile
  }

  type Mutation {
    createOneProfile(data: ProfileCreateInput!): Profile!
    updateOneProfile(where: ProfileWhereUniqueInput!, data: ProfileUpdateInput!): Profile!
    deleteOneProfile(where: ProfileWhereUniqueInput!): Profile
    upsertOneProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile
    deleteManyProfile(where: ProfileWhereInput): BatchPayload
    updateManyProfile(where: ProfileWhereInput, data: ProfileUpdateManyMutationInput): BatchPayload
  }
`;
