type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  Date: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
};

type Query = {
  __typename?: 'Query';
  commentById?: Maybe<Comment>;
  commentByIds: Array<Comment>;
  commentOne?: Maybe<Comment>;
  commentMany: Array<Comment>;
  commentCount?: Maybe<Scalars['Int']>;
  commentConnection?: Maybe<CommentConnection>;
  commentPagination?: Maybe<CommentPagination>;
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userOne?: Maybe<User>;
  userMany: Array<User>;
  userCount?: Maybe<Scalars['Int']>;
  userConnection?: Maybe<UserConnection>;
  userPagination?: Maybe<UserPagination>;
  postById?: Maybe<Post>;
  postByIds: Array<Post>;
  postOne?: Maybe<Post>;
  postMany: Array<Post>;
  postCount?: Maybe<Scalars['Int']>;
  postConnection?: Maybe<PostConnection>;
  postPagination?: Maybe<PostPagination>;
};

type QueryCommentByIdArgs = {
  _id: Scalars['MongoID'];
};

type QueryCommentByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCommentInput>;
};

type QueryCommentOneArgs = {
  filter?: Maybe<FilterFindOneCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCommentInput>;
};

type QueryCommentManyArgs = {
  filter?: Maybe<FilterFindManyCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCommentInput>;
};

type QueryCommentCountArgs = {
  filter?: Maybe<FilterCountCommentInput>;
};

type QueryCommentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyCommentInput>;
  sort?: Maybe<SortConnectionCommentEnum>;
};

type QueryCommentPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyCommentInput>;
  sort?: Maybe<SortFindManyCommentInput>;
};

type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};

type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};

type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};

type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};

type QueryUserCountArgs = {
  filter?: Maybe<FilterCountUserInput>;
};

type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortConnectionUserEnum>;
};

type QueryUserPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortFindManyUserInput>;
};

type QueryPostByIdArgs = {
  _id: Scalars['MongoID'];
};

type QueryPostByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsPostInput>;
};

type QueryPostOneArgs = {
  filter?: Maybe<FilterFindOnePostInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOnePostInput>;
};

type QueryPostManyArgs = {
  filter?: Maybe<FilterFindManyPostInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyPostInput>;
};

type QueryPostCountArgs = {
  filter?: Maybe<FilterCountPostInput>;
};

type QueryPostConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyPostInput>;
  sort?: Maybe<SortConnectionPostEnum>;
};

type QueryPostPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyPostInput>;
  sort?: Maybe<SortFindManyPostInput>;
};

type Comment = {
  __typename?: 'Comment';
  /** 게시글 */
  body: Scalars['MongoID'];
  /** 댓글 */
  text: Scalars['String'];
  /** 글쓴이 */
  writer: Scalars['MongoID'];
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

enum SortFindByIdsCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindOneCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneCommentInput>>;
  AND?: Maybe<Array<FilterFindOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindOneCommentOperatorsInput = {
  _id?: Maybe<FilterFindOneComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterFindOneCommentCreatedAtOperatorsInput>;
};

type FilterFindOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterFindOneCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindManyCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyCommentInput>>;
  AND?: Maybe<Array<FilterFindManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindManyCommentOperatorsInput = {
  _id?: Maybe<FilterFindManyComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterFindManyCommentCreatedAtOperatorsInput>;
};

type FilterFindManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterFindManyCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterCountCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountCommentOperatorsInput>;
  OR?: Maybe<Array<FilterCountCommentInput>>;
  AND?: Maybe<Array<FilterCountCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterCountCommentOperatorsInput = {
  _id?: Maybe<FilterCountComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterCountCommentCreatedAtOperatorsInput>;
};

type FilterCountComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterCountCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
type CommentConnection = {
  __typename?: 'CommentConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<CommentEdge>;
};

/** Information about pagination in a connection. */
type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
type CommentEdge = {
  __typename?: 'CommentEdge';
  /** The item at the end of the edge */
  node: Comment;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

enum SortConnectionCommentEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
}

/** List of items with pagination. */
type CommentPagination = {
  __typename?: 'CommentPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Comment>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

type User = {
  __typename?: 'User';
  /** 이메일주소 */
  email: Scalars['String'];
  /** 이름 */
  firstName: Scalars['String'];
  /** 성 */
  lastName: Scalars['String'];
  /** 역할 */
  role: EnumUserRole;
  profile?: Maybe<UserProfile>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id: Scalars['MongoID'];
};

/** 역할 */
enum EnumUserRole {
  Admin = 'ADMIN',
  User = 'USER',
}

type UserProfile = {
  __typename?: 'UserProfile';
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** 성별 */
enum EnumUserProfileGender {
  Man = 'MAN',
  Woman = 'WOMAN',
}

enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindOneUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterFindOneUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

type FilterFindOneUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindOneUserOperatorsInput = {
  email?: Maybe<FilterFindOneUserEmailOperatorsInput>;
  _id?: Maybe<FilterFindOneUser_IdOperatorsInput>;
};

type FilterFindOneUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterFindOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindManyUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterFindManyUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

type FilterFindManyUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindManyUserOperatorsInput = {
  email?: Maybe<FilterFindManyUserEmailOperatorsInput>;
  _id?: Maybe<FilterFindManyUser_IdOperatorsInput>;
};

type FilterFindManyUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterFindManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterCountUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterCountUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountUserOperatorsInput>;
  OR?: Maybe<Array<FilterCountUserInput>>;
  AND?: Maybe<Array<FilterCountUserInput>>;
};

type FilterCountUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterCountUserOperatorsInput = {
  email?: Maybe<FilterCountUserEmailOperatorsInput>;
  _id?: Maybe<FilterCountUser_IdOperatorsInput>;
};

type FilterCountUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterCountUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
};

/** An edge in a connection. */
type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

enum SortConnectionUserEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  EmailDesc = 'EMAIL_DESC',
  EmailAsc = 'EMAIL_ASC',
}

/** List of items with pagination. */
type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

type Post = {
  __typename?: 'Post';
  /** 제목 */
  title: Scalars['String'];
  /** 내용 */
  content: Scalars['String'];
  /** 발행여부 */
  published: Scalars['Boolean'];
  /** 글쓴이 */
  author: Scalars['MongoID'];
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id: Scalars['MongoID'];
};

enum SortFindByIdsPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindOnePostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterFindOnePostInput>>;
  AND?: Maybe<Array<FilterFindOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindOnePostOperatorsInput = {
  _id?: Maybe<FilterFindOnePost_IdOperatorsInput>;
};

type FilterFindOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterFindManyPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyPostInput>>;
  AND?: Maybe<Array<FilterFindManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterFindManyPostOperatorsInput = {
  _id?: Maybe<FilterFindManyPost_IdOperatorsInput>;
};

type FilterFindManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortFindManyPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type FilterCountPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountPostOperatorsInput>;
  OR?: Maybe<Array<FilterCountPostInput>>;
  AND?: Maybe<Array<FilterCountPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterCountPostOperatorsInput = {
  _id?: Maybe<FilterCountPost_IdOperatorsInput>;
};

type FilterCountPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
type PostConnection = {
  __typename?: 'PostConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<PostEdge>;
};

/** An edge in a connection. */
type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge */
  node: Post;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

enum SortConnectionPostEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
}

/** List of items with pagination. */
type PostPagination = {
  __typename?: 'PostPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Post>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  commentCreateOne?: Maybe<CreateOneCommentPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  commentCreateMany?: Maybe<CreateManyCommentPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateById?: Maybe<UpdateByIdCommentPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateOne?: Maybe<UpdateOneCommentPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentUpdateMany?: Maybe<UpdateManyCommentPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  commentRemoveById?: Maybe<RemoveByIdCommentPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  commentRemoveOne?: Maybe<RemoveOneCommentPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentRemoveMany?: Maybe<RemoveManyCommentPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  postCreateOne?: Maybe<CreateOnePostPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  postCreateMany?: Maybe<CreateManyPostPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateById?: Maybe<UpdateByIdPostPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateOne?: Maybe<UpdateOnePostPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postUpdateMany?: Maybe<UpdateManyPostPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  postRemoveById?: Maybe<RemoveByIdPostPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  postRemoveOne?: Maybe<RemoveOnePostPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postRemoveMany?: Maybe<RemoveManyPostPayload>;
};

type MutationCommentCreateOneArgs = {
  record: CreateOneCommentInput;
};

type MutationCommentCreateManyArgs = {
  records: Array<CreateManyCommentInput>;
};

type MutationCommentUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdCommentInput;
};

type MutationCommentUpdateOneArgs = {
  record: UpdateOneCommentInput;
  filter?: Maybe<FilterUpdateOneCommentInput>;
  sort?: Maybe<SortUpdateOneCommentInput>;
  skip?: Maybe<Scalars['Int']>;
};

type MutationCommentUpdateManyArgs = {
  record: UpdateManyCommentInput;
  filter?: Maybe<FilterUpdateManyCommentInput>;
  sort?: Maybe<SortUpdateManyCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

type MutationCommentRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

type MutationCommentRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneCommentInput>;
  sort?: Maybe<SortRemoveOneCommentInput>;
};

type MutationCommentRemoveManyArgs = {
  filter: FilterRemoveManyCommentInput;
  limit?: Maybe<Scalars['Int']>;
};

type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};

type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};

type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdUserInput;
};

type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};

type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};

type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: Maybe<Scalars['Int']>;
};

type MutationPostCreateOneArgs = {
  record: CreateOnePostInput;
};

type MutationPostCreateManyArgs = {
  records: Array<CreateManyPostInput>;
};

type MutationPostUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdPostInput;
};

type MutationPostUpdateOneArgs = {
  record: UpdateOnePostInput;
  filter?: Maybe<FilterUpdateOnePostInput>;
  sort?: Maybe<SortUpdateOnePostInput>;
  skip?: Maybe<Scalars['Int']>;
};

type MutationPostUpdateManyArgs = {
  record: UpdateManyPostInput;
  filter?: Maybe<FilterUpdateManyPostInput>;
  sort?: Maybe<SortUpdateManyPostInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

type MutationPostRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

type MutationPostRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOnePostInput>;
  sort?: Maybe<SortRemoveOnePostInput>;
};

type MutationPostRemoveManyArgs = {
  filter: FilterRemoveManyPostInput;
  limit?: Maybe<Scalars['Int']>;
};

type CreateOneCommentPayload = {
  __typename?: 'CreateOneCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

type CreateOneCommentInput = {
  /** 게시글 */
  body: Scalars['MongoID'];
  /** 댓글 */
  text: Scalars['String'];
  /** 글쓴이 */
  writer: Scalars['MongoID'];
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

type CreateManyCommentPayload = {
  __typename?: 'CreateManyCommentPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Comment>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type CreateManyCommentInput = {
  /** 게시글 */
  body: Scalars['MongoID'];
  /** 댓글 */
  text: Scalars['String'];
  /** 글쓴이 */
  writer: Scalars['MongoID'];
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

type UpdateByIdCommentPayload = {
  __typename?: 'UpdateByIdCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateByIdCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

type UpdateOneCommentPayload = {
  __typename?: 'UpdateOneCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateOneCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

type FilterUpdateOneCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneCommentInput>>;
  AND?: Maybe<Array<FilterUpdateOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateOneCommentOperatorsInput = {
  _id?: Maybe<FilterUpdateOneComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateOneCommentCreatedAtOperatorsInput>;
};

type FilterUpdateOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterUpdateOneCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type UpdateManyCommentPayload = {
  __typename?: 'UpdateManyCommentPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateManyCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

type FilterUpdateManyCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyCommentInput>>;
  AND?: Maybe<Array<FilterUpdateManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateManyCommentOperatorsInput = {
  _id?: Maybe<FilterUpdateManyComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterUpdateManyCommentCreatedAtOperatorsInput>;
};

type FilterUpdateManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterUpdateManyCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveByIdCommentPayload = {
  __typename?: 'RemoveByIdCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type RemoveOneCommentPayload = {
  __typename?: 'RemoveOneCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveOneCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneCommentInput>>;
  AND?: Maybe<Array<FilterRemoveOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveOneCommentOperatorsInput = {
  _id?: Maybe<FilterRemoveOneComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveOneCommentCreatedAtOperatorsInput>;
};

type FilterRemoveOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterRemoveOneCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortRemoveOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveManyCommentPayload = {
  __typename?: 'RemoveManyCommentPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveManyCommentInput = {
  /** 게시글 */
  body?: Maybe<Scalars['MongoID']>;
  /** 댓글 */
  text?: Maybe<Scalars['String']>;
  /** 글쓴이 */
  writer?: Maybe<Scalars['MongoID']>;
  /** 대댓글 */
  reply?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyCommentInput>>;
  AND?: Maybe<Array<FilterRemoveManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveManyCommentOperatorsInput = {
  _id?: Maybe<FilterRemoveManyComment_IdOperatorsInput>;
  createdAt?: Maybe<FilterRemoveManyCommentCreatedAtOperatorsInput>;
};

type FilterRemoveManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterRemoveManyCommentCreatedAtOperatorsInput = {
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type CreateOneUserInput = {
  /** 이메일주소 */
  email: Scalars['String'];
  /** 이름 */
  firstName: Scalars['String'];
  /** 성 */
  lastName: Scalars['String'];
  /** 역할 */
  role: EnumUserRole;
  profile?: Maybe<UserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

type UserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type CreateManyUserInput = {
  /** 이메일주소 */
  email: Scalars['String'];
  /** 이름 */
  firstName: Scalars['String'];
  /** 성 */
  lastName: Scalars['String'];
  /** 역할 */
  role: EnumUserRole;
  profile?: Maybe<UserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateByIdUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<UpdateByIdUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

type UpdateByIdUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateOneUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<UpdateOneUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

type UpdateOneUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

type FilterUpdateOneUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterUpdateOneUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

type FilterUpdateOneUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateOneUserOperatorsInput = {
  email?: Maybe<FilterUpdateOneUserEmailOperatorsInput>;
  _id?: Maybe<FilterUpdateOneUser_IdOperatorsInput>;
};

type FilterUpdateOneUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterUpdateOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateManyUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<UpdateManyUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

type UpdateManyUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

type FilterUpdateManyUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterUpdateManyUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

type FilterUpdateManyUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateManyUserOperatorsInput = {
  email?: Maybe<FilterUpdateManyUserEmailOperatorsInput>;
  _id?: Maybe<FilterUpdateManyUser_IdOperatorsInput>;
};

type FilterUpdateManyUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterUpdateManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveOneUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterRemoveOneUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

type FilterRemoveOneUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveOneUserOperatorsInput = {
  email?: Maybe<FilterRemoveOneUserEmailOperatorsInput>;
  _id?: Maybe<FilterRemoveOneUser_IdOperatorsInput>;
};

type FilterRemoveOneUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterRemoveOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveManyUserInput = {
  /** 이메일주소 */
  email?: Maybe<Scalars['String']>;
  /** 이름 */
  firstName?: Maybe<Scalars['String']>;
  /** 성 */
  lastName?: Maybe<Scalars['String']>;
  /** 역할 */
  role?: Maybe<EnumUserRole>;
  profile?: Maybe<FilterRemoveManyUserProfileInput>;
  /** 등록한 글 목록 */
  posts?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

type FilterRemoveManyUserProfileInput = {
  /** 소개글 */
  bio?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<EnumUserProfileGender>;
  /** 연락처 */
  contactNumber?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveManyUserOperatorsInput = {
  email?: Maybe<FilterRemoveManyUserEmailOperatorsInput>;
  _id?: Maybe<FilterRemoveManyUser_IdOperatorsInput>;
};

type FilterRemoveManyUserEmailOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

type FilterRemoveManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

type CreateOnePostPayload = {
  __typename?: 'CreateOnePostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type CreateOnePostInput = {
  /** 제목 */
  title: Scalars['String'];
  /** 내용 */
  content: Scalars['String'];
  /** 발행여부 */
  published: Scalars['Boolean'];
  /** 글쓴이 */
  author: Scalars['MongoID'];
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type CreateManyPostPayload = {
  __typename?: 'CreateManyPostPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Post>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type CreateManyPostInput = {
  /** 제목 */
  title: Scalars['String'];
  /** 내용 */
  content: Scalars['String'];
  /** 발행여부 */
  published: Scalars['Boolean'];
  /** 글쓴이 */
  author: Scalars['MongoID'];
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type UpdateByIdPostPayload = {
  __typename?: 'UpdateByIdPostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateByIdPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type UpdateOnePostPayload = {
  __typename?: 'UpdateOnePostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateOnePostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type FilterUpdateOnePostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOnePostInput>>;
  AND?: Maybe<Array<FilterUpdateOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateOnePostOperatorsInput = {
  _id?: Maybe<FilterUpdateOnePost_IdOperatorsInput>;
};

type FilterUpdateOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type UpdateManyPostPayload = {
  __typename?: 'UpdateManyPostPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type UpdateManyPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type FilterUpdateManyPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyPostInput>>;
  AND?: Maybe<Array<FilterUpdateManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterUpdateManyPostOperatorsInput = {
  _id?: Maybe<FilterUpdateManyPost_IdOperatorsInput>;
};

type FilterUpdateManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortUpdateManyPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveByIdPostPayload = {
  __typename?: 'RemoveByIdPostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type RemoveOnePostPayload = {
  __typename?: 'RemoveOnePostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveOnePostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOnePostInput>>;
  AND?: Maybe<Array<FilterRemoveOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveOnePostOperatorsInput = {
  _id?: Maybe<FilterRemoveOnePost_IdOperatorsInput>;
};

type FilterRemoveOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

enum SortRemoveOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
}

type RemoveManyPostPayload = {
  __typename?: 'RemoveManyPostPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

type FilterRemoveManyPostInput = {
  /** 제목 */
  title?: Maybe<Scalars['String']>;
  /** 내용 */
  content?: Maybe<Scalars['String']>;
  /** 발행여부 */
  published?: Maybe<Scalars['Boolean']>;
  /** 글쓴이 */
  author?: Maybe<Scalars['MongoID']>;
  /** 카테고리 */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 댓글 목록 */
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** 키워드 */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 태그 */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyPostInput>>;
  AND?: Maybe<Array<FilterRemoveManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
type FilterRemoveManyPostOperatorsInput = {
  _id?: Maybe<FilterRemoveManyPost_IdOperatorsInput>;
};

type FilterRemoveManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};
