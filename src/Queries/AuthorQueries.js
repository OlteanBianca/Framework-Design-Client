import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      books {
        id
        title
      }
    }
  }
`;

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!) {
    addAuthor(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($id: ID!, $name: String!) {
    updateAuthor(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`;

export const GET_AUTHOR_ID = gql`
  query GetAuthorId($name: String!) {
    authorId(name: $name) {
      id
    }
  }
`;