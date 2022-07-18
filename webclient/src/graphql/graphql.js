import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

export const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
    }
  }
`;

export const QUERY_MOVIE_BYNAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      year
    }
  }
`;

//mutations

export const CREATE_USER_MUTATIONS = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      username
      age
      nationality
    }
  }
`;

// export const DELETE_USER_MUTATIONS = gql`
//   mutation DeleteUser($deleteUserId:ID!) {
//     deleteUser(id: $deleteUserId) {
//     id
//   }
// `;
