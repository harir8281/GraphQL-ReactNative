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
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      year
    }
  }
`;
