import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_BORROWED_BOOK, GET_BORROWED_BOOKS } from '../Queries/BorrowedBookQueries.js';

const DeleteBorrowedBook = ({ borrowedBookId, onCompleted }) => {
  const [deleteBorrowedBook] = useMutation(DELETE_BORROWED_BOOK, {
    refetchQueries: [{ query: GET_BORROWED_BOOKS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  useEffect(() => {
    deleteBorrowedBook({ variables: { id: borrowedBookId } });
  }, [deleteBorrowedBook, borrowedBookId]);

  return null;
};

export default DeleteBorrowedBook;