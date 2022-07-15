import {gql} from 'graphql-tag';

export const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
    }
  }
`;