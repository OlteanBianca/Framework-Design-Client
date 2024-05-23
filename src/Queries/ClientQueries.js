import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      borrowedBooks {
        id
        book {
          id
          title
        }
      }
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation CreateClient($name: String!) {
    addClient(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: ID!, $name: String!) {
    updateClient(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

export const GET_CLIENT_ID = gql`
  query GetClientId($name: String!) {
    clientId(name: $name) {
      id
    }
  }
`;