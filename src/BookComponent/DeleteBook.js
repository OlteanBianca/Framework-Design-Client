import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_BOOK, GET_BOOKS } from '../Queries/BookQueries.js';

const DeleteBook = ({ bookId, onCompleted }) => {
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  useEffect(() => {
    deleteBook({ variables: { id: bookId } });
  }, [deleteBook, bookId]);

  return null;
};

export default DeleteBook;