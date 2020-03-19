// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBracket {
  count: Int!
}

type AggregateSong {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bracket {
  id: ID!
  user: User!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  roundTime: Int!
  active: Boolean
}

type BracketConnection {
  pageInfo: PageInfo!
  edges: [BracketEdge]!
  aggregate: AggregateBracket!
}

input BracketCreateInput {
  id: ID
  user: UserCreateOneWithoutBracketsInput!
  songs: SongCreateManyInput
  roundTime: Int!
  active: Boolean
}

input BracketCreateManyWithoutUserInput {
  create: [BracketCreateWithoutUserInput!]
  connect: [BracketWhereUniqueInput!]
}

input BracketCreateOneInput {
  create: BracketCreateInput
  connect: BracketWhereUniqueInput
}

input BracketCreateWithoutUserInput {
  id: ID
  songs: SongCreateManyInput
  roundTime: Int!
  active: Boolean
}

type BracketEdge {
  node: Bracket!
  cursor: String!
}

enum BracketOrderByInput {
  id_ASC
  id_DESC
  roundTime_ASC
  roundTime_DESC
  active_ASC
  active_DESC
}

type BracketPreviousValues {
  id: ID!
  roundTime: Int!
  active: Boolean
}

input BracketScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  roundTime: Int
  roundTime_not: Int
  roundTime_in: [Int!]
  roundTime_not_in: [Int!]
  roundTime_lt: Int
  roundTime_lte: Int
  roundTime_gt: Int
  roundTime_gte: Int
  active: Boolean
  active_not: Boolean
  AND: [BracketScalarWhereInput!]
  OR: [BracketScalarWhereInput!]
  NOT: [BracketScalarWhereInput!]
}

type BracketSubscriptionPayload {
  mutation: MutationType!
  node: Bracket
  updatedFields: [String!]
  previousValues: BracketPreviousValues
}

input BracketSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BracketWhereInput
  AND: [BracketSubscriptionWhereInput!]
  OR: [BracketSubscriptionWhereInput!]
  NOT: [BracketSubscriptionWhereInput!]
}

input BracketUpdateDataInput {
  user: UserUpdateOneRequiredWithoutBracketsInput
  songs: SongUpdateManyInput
  roundTime: Int
  active: Boolean
}

input BracketUpdateInput {
  user: UserUpdateOneRequiredWithoutBracketsInput
  songs: SongUpdateManyInput
  roundTime: Int
  active: Boolean
}

input BracketUpdateManyDataInput {
  roundTime: Int
  active: Boolean
}

input BracketUpdateManyMutationInput {
  roundTime: Int
  active: Boolean
}

input BracketUpdateManyWithoutUserInput {
  create: [BracketCreateWithoutUserInput!]
  delete: [BracketWhereUniqueInput!]
  connect: [BracketWhereUniqueInput!]
  set: [BracketWhereUniqueInput!]
  disconnect: [BracketWhereUniqueInput!]
  update: [BracketUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [BracketUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [BracketScalarWhereInput!]
  updateMany: [BracketUpdateManyWithWhereNestedInput!]
}

input BracketUpdateManyWithWhereNestedInput {
  where: BracketScalarWhereInput!
  data: BracketUpdateManyDataInput!
}

input BracketUpdateOneInput {
  create: BracketCreateInput
  update: BracketUpdateDataInput
  upsert: BracketUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: BracketWhereUniqueInput
}

input BracketUpdateWithoutUserDataInput {
  songs: SongUpdateManyInput
  roundTime: Int
  active: Boolean
}

input BracketUpdateWithWhereUniqueWithoutUserInput {
  where: BracketWhereUniqueInput!
  data: BracketUpdateWithoutUserDataInput!
}

input BracketUpsertNestedInput {
  update: BracketUpdateDataInput!
  create: BracketCreateInput!
}

input BracketUpsertWithWhereUniqueWithoutUserInput {
  where: BracketWhereUniqueInput!
  update: BracketUpdateWithoutUserDataInput!
  create: BracketCreateWithoutUserInput!
}

input BracketWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
  roundTime: Int
  roundTime_not: Int
  roundTime_in: [Int!]
  roundTime_not_in: [Int!]
  roundTime_lt: Int
  roundTime_lte: Int
  roundTime_gt: Int
  roundTime_gte: Int
  active: Boolean
  active_not: Boolean
  AND: [BracketWhereInput!]
  OR: [BracketWhereInput!]
  NOT: [BracketWhereInput!]
}

input BracketWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBracket(data: BracketCreateInput!): Bracket!
  updateBracket(data: BracketUpdateInput!, where: BracketWhereUniqueInput!): Bracket
  updateManyBrackets(data: BracketUpdateManyMutationInput!, where: BracketWhereInput): BatchPayload!
  upsertBracket(where: BracketWhereUniqueInput!, create: BracketCreateInput!, update: BracketUpdateInput!): Bracket!
  deleteBracket(where: BracketWhereUniqueInput!): Bracket
  deleteManyBrackets(where: BracketWhereInput): BatchPayload!
  createSong(data: SongCreateInput!): Song!
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteManySongs(where: SongWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bracket(where: BracketWhereUniqueInput!): Bracket
  brackets(where: BracketWhereInput, orderBy: BracketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bracket]!
  bracketsConnection(where: BracketWhereInput, orderBy: BracketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BracketConnection!
  song(where: SongWhereUniqueInput!): Song
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Song {
  id: ID!
  spotifyID: String!
  title: String!
  album: String!
  position: Int!
  votingStatus: VotingStatus!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type SongConnection {
  pageInfo: PageInfo!
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  id: ID
  spotifyID: String!
  title: String!
  album: String!
  position: Int!
  votingStatus: VotingStatus!
  votes: VoteCreateManyWithoutSongInput
}

input SongCreateManyInput {
  create: [SongCreateInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateOneWithoutVotesInput {
  create: SongCreateWithoutVotesInput
  connect: SongWhereUniqueInput
}

input SongCreateWithoutVotesInput {
  id: ID
  spotifyID: String!
  title: String!
  album: String!
  position: Int!
  votingStatus: VotingStatus!
}

type SongEdge {
  node: Song!
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  spotifyID_ASC
  spotifyID_DESC
  title_ASC
  title_DESC
  album_ASC
  album_DESC
  position_ASC
  position_DESC
  votingStatus_ASC
  votingStatus_DESC
}

type SongPreviousValues {
  id: ID!
  spotifyID: String!
  title: String!
  album: String!
  position: Int!
  votingStatus: VotingStatus!
}

input SongScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  spotifyID: String
  spotifyID_not: String
  spotifyID_in: [String!]
  spotifyID_not_in: [String!]
  spotifyID_lt: String
  spotifyID_lte: String
  spotifyID_gt: String
  spotifyID_gte: String
  spotifyID_contains: String
  spotifyID_not_contains: String
  spotifyID_starts_with: String
  spotifyID_not_starts_with: String
  spotifyID_ends_with: String
  spotifyID_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  album: String
  album_not: String
  album_in: [String!]
  album_not_in: [String!]
  album_lt: String
  album_lte: String
  album_gt: String
  album_gte: String
  album_contains: String
  album_not_contains: String
  album_starts_with: String
  album_not_starts_with: String
  album_ends_with: String
  album_not_ends_with: String
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  votingStatus: VotingStatus
  votingStatus_not: VotingStatus
  votingStatus_in: [VotingStatus!]
  votingStatus_not_in: [VotingStatus!]
  AND: [SongScalarWhereInput!]
  OR: [SongScalarWhereInput!]
  NOT: [SongScalarWhereInput!]
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongWhereInput
  AND: [SongSubscriptionWhereInput!]
  OR: [SongSubscriptionWhereInput!]
  NOT: [SongSubscriptionWhereInput!]
}

input SongUpdateDataInput {
  spotifyID: String
  title: String
  album: String
  position: Int
  votingStatus: VotingStatus
  votes: VoteUpdateManyWithoutSongInput
}

input SongUpdateInput {
  spotifyID: String
  title: String
  album: String
  position: Int
  votingStatus: VotingStatus
  votes: VoteUpdateManyWithoutSongInput
}

input SongUpdateManyDataInput {
  spotifyID: String
  title: String
  album: String
  position: Int
  votingStatus: VotingStatus
}

input SongUpdateManyInput {
  create: [SongCreateInput!]
  update: [SongUpdateWithWhereUniqueNestedInput!]
  upsert: [SongUpsertWithWhereUniqueNestedInput!]
  delete: [SongWhereUniqueInput!]
  connect: [SongWhereUniqueInput!]
  set: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  deleteMany: [SongScalarWhereInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
}

input SongUpdateManyMutationInput {
  spotifyID: String
  title: String
  album: String
  position: Int
  votingStatus: VotingStatus
}

input SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput!
  data: SongUpdateManyDataInput!
}

input SongUpdateOneWithoutVotesInput {
  create: SongCreateWithoutVotesInput
  update: SongUpdateWithoutVotesDataInput
  upsert: SongUpsertWithoutVotesInput
  delete: Boolean
  disconnect: Boolean
  connect: SongWhereUniqueInput
}

input SongUpdateWithoutVotesDataInput {
  spotifyID: String
  title: String
  album: String
  position: Int
  votingStatus: VotingStatus
}

input SongUpdateWithWhereUniqueNestedInput {
  where: SongWhereUniqueInput!
  data: SongUpdateDataInput!
}

input SongUpsertWithoutVotesInput {
  update: SongUpdateWithoutVotesDataInput!
  create: SongCreateWithoutVotesInput!
}

input SongUpsertWithWhereUniqueNestedInput {
  where: SongWhereUniqueInput!
  update: SongUpdateDataInput!
  create: SongCreateInput!
}

input SongWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  spotifyID: String
  spotifyID_not: String
  spotifyID_in: [String!]
  spotifyID_not_in: [String!]
  spotifyID_lt: String
  spotifyID_lte: String
  spotifyID_gt: String
  spotifyID_gte: String
  spotifyID_contains: String
  spotifyID_not_contains: String
  spotifyID_starts_with: String
  spotifyID_not_starts_with: String
  spotifyID_ends_with: String
  spotifyID_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  album: String
  album_not: String
  album_in: [String!]
  album_not_in: [String!]
  album_lt: String
  album_lte: String
  album_gt: String
  album_gte: String
  album_contains: String
  album_not_contains: String
  album_starts_with: String
  album_not_starts_with: String
  album_ends_with: String
  album_not_ends_with: String
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  votingStatus: VotingStatus
  votingStatus_not: VotingStatus
  votingStatus_in: [VotingStatus!]
  votingStatus_not_in: [VotingStatus!]
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [SongWhereInput!]
  OR: [SongWhereInput!]
  NOT: [SongWhereInput!]
}

input SongWhereUniqueInput {
  id: ID
}

type Subscription {
  bracket(where: BracketSubscriptionWhereInput): BracketSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  brackets(where: BracketWhereInput, orderBy: BracketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bracket!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
  brackets: BracketCreateManyWithoutUserInput
}

input UserCreateOneWithoutBracketsInput {
  create: UserCreateWithoutBracketsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBracketsInput {
  id: ID
  username: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  id: ID
  username: String!
  email: String!
  password: String!
  brackets: BracketCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
  brackets: BracketUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutBracketsInput {
  create: UserCreateWithoutBracketsInput
  update: UserUpdateWithoutBracketsDataInput
  upsert: UserUpsertWithoutBracketsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBracketsDataInput {
  username: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  username: String
  email: String
  password: String
  brackets: BracketUpdateManyWithoutUserInput
}

input UserUpsertWithoutBracketsInput {
  update: UserUpdateWithoutBracketsDataInput!
  create: UserCreateWithoutBracketsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  brackets_every: BracketWhereInput
  brackets_some: BracketWhereInput
  brackets_none: BracketWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}

type Vote {
  id: ID!
  voteType: Boolean
  song: Song
  bracket: Bracket
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  voteType: Boolean
  song: SongCreateOneWithoutVotesInput
  bracket: BracketCreateOneInput
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutSongInput {
  create: [VoteCreateWithoutSongInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutSongInput {
  id: ID
  voteType: Boolean
  bracket: BracketCreateOneInput
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  id: ID
  voteType: Boolean
  song: SongCreateOneWithoutVotesInput
  bracket: BracketCreateOneInput
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  voteType_ASC
  voteType_DESC
}

type VotePreviousValues {
  id: ID!
  voteType: Boolean
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  voteType: Boolean
  voteType_not: Boolean
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  voteType: Boolean
  song: SongUpdateOneWithoutVotesInput
  bracket: BracketUpdateOneInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyDataInput {
  voteType: Boolean
}

input VoteUpdateManyMutationInput {
  voteType: Boolean
}

input VoteUpdateManyWithoutSongInput {
  create: [VoteCreateWithoutSongInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutSongInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutSongInput!]
  deleteMany: [VoteScalarWhereInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
}

input VoteUpdateManyWithWhereNestedInput {
  where: VoteScalarWhereInput!
  data: VoteUpdateManyDataInput!
}

input VoteUpdateWithoutSongDataInput {
  voteType: Boolean
  bracket: BracketUpdateOneInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  voteType: Boolean
  song: SongUpdateOneWithoutVotesInput
  bracket: BracketUpdateOneInput
}

input VoteUpdateWithWhereUniqueWithoutSongInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutSongDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutSongInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutSongDataInput!
  create: VoteCreateWithoutSongInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  voteType: Boolean
  voteType_not: Boolean
  song: SongWhereInput
  bracket: BracketWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}

enum VotingStatus {
  WIN
  LOSS
  IN_PROGRESS
}
`