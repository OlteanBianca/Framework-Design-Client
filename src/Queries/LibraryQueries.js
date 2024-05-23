import { gql } from '@apollo/client';

export const GET_LIBRARIES = gql`
  query GetLibraries {
    libraries {
      id
      name
      books {
        id
        title
      }
    }
  }
`;

export const CREATE_LIBRARY = gql`
  mutation CreateLibrary($name: String!) {
    addLibrary(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_LIBRARY = gql`
  mutation DeleteLibrary($id: ID!) {
    deleteLibrary(id: $id) {
      id
    }
  }
`;

export const UPDATE_LIBRARY = gql`
  mutation UpdateLibrary($id: ID!, $name: String!) {
    updateLibrary(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const GET_LIBRARY_ID = gql`
  query GetLibraryId($name: String!) {
    libraryId(name: $name) {
      id
    }
  }
`;