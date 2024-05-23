import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      genre
      author {
        id
        name
      }
      library {
        id
        name
      }
      totalCopies
      availableCopies
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $genre: String!, $authorId: ID!, $libraryId: ID!, $totalCopies: Int!) {
    addBook(title: $title, genre: $genre, authorId: $authorId, libraryId: $libraryId, totalCopies: $totalCopies) {
      id
      title
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String, $genre: String, $authorId: ID, $libraryId: ID, $totalCopies: Int, $availableCopies: Int!) {
    updateBook(id: $id, title: $title, genre: $genre, authorId: $authorId, libraryId: $libraryId, totalCopies: $totalCopies, availableCopies: $availableCopies) {
      id
      title
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export const GET_BOOK_ID = gql`
  query GetBookId($name: String!) {
    bookId(name: $name) {
      id
    }
  }
`;