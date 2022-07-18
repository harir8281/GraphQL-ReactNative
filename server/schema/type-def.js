const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: NATIONALITY!
    friends: [User]
    FavoriteMovies: [Movie]
  }
  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheatre: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: NATIONALITY = BRAZIL
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
 
  type Mutation {
    createUser(input: CreateUserInput): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id:ID!):User
  }
  enum NATIONALITY {
    CANADA
    ENGLAND
    GERMANY
    FRANCE
    UKRINE
    INDIA
  }
`;

module.exports = { typeDefs };
