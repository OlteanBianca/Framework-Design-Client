import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_BORROWED_BOOKS, UPDATE_BORROWED_BOOK } from '../Queries/BorrowedBookQueries.js';

const UpdateBorrowedBook = ({ borrowedBook, onCompleted }) => {
  const [borrowedDate, setBorrowedDate] = useState(borrowedBook.borrowedDate);
  const [dueDate, setDueDate] = useState(borrowedBook.dueDate);

  const [updateBorrowedBook] = useMutation(UPDATE_BORROWED_BOOK, {
    refetchQueries: [{ query: GET_BORROWED_BOOKS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBorrowedBook({ variables: { id: borrowedBook.id, bookId: borrowedBook.book.id, clientId: borrowedBook.client.id, borrowedDate, dueDate } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Borrowed Date" value={borrowedDate} onChange={(e) => setBorrowedDate(e.target.value)} />
      <input type="text" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Update Borrowed Book</button>
    </form>
  );
};

export default UpdateBorrowedBook;