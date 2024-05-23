import { gql } from '@apollo/client';

export const GET_BORROWED_BOOKS = gql`
  query GetBorrowedBooks {
    borrowedBooks {
      id
      book {
        id
        title
      }
      client {
        id
        name
      }
      borrowedDate
      dueDate
    }
  }
`;

export const CREATE_BORROWED_BOOK = gql`
  mutation CreateBorrowedBook($bookId: ID!, $clientId: ID!, $borrowedDate: String!, $dueDate: String!) {
    addBorrowedBook(bookId: $bookId, clientId: $clientId, borrowedDate: $borrowedDate, dueDate: $dueDate) {
      id
      book {
        id
        title
      }
      client {
        id
        name
      }
      borrowedDate
      dueDate
    }
  }
`;

export const DELETE_BORROWED_BOOK = gql`
  mutation DeleteBorrowedBook($id: ID!) {
    deleteBorrowedBook(id: $id) {
      id
    }
  }
`;

export const UPDATE_BORROWED_BOOK = gql`
mutation UpdateBorrowedBook($id: ID!, $bookId: ID, $clientId: ID, $borrowedDate: String, $dueDate: String) {
  updateBorrowedBook(id: $id, bookId: $bookId, clientId: $clientId, borrowedDate: $borrowedDate, dueDate: $dueDate) {
    id
    book {
      id
      title
    }
    client {
      id
      name
    }
    borrowedDate
    dueDate
  }
}
`;