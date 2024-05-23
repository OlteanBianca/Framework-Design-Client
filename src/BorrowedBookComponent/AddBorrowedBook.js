import React, { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_BORROWED_BOOK, GET_BORROWED_BOOKS } from '../Queries/BorrowedBookQueries.js';
import { GET_BOOK_ID } from '../Queries/BookQueries.js';
import { GET_CLIENT_ID } from '../Queries/ClientQueries.js';

const AddBorrowedBook = () => {
  const [bookName, setBookName] = useState('');
  const [clientName, setClientName] = useState('');
  const [borrowedDate, setBorrowedDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [bookId, setAuthorId] = useState(null);
  const [clientId, setLibraryId] = useState(null);

  const [createBorrowedBook] = useMutation(CREATE_BORROWED_BOOK, {
    refetchQueries: [{ query: GET_BORROWED_BOOKS }],
  });

  const [getBookId, { data: bookData }] = useLazyQuery(GET_BOOK_ID);
  const [getClientId, { data: clientData }] = useLazyQuery(GET_CLIENT_ID);

  useEffect(() => {
    if (bookData && bookData.bookId) {
      setAuthorId(bookData.bookId.id);
    }
  }, [bookData]);

  useEffect(() => {
    if (clientData && clientData.clientId) {
      setLibraryId(clientData.clientId.id);
    }
  }, [clientData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !clientName) {
      return;
    }

    getBookId({ variables: { name: bookName } });
    getClientId({ variables: { name: clientName } });
  };

  useEffect(() => {
    if (bookId && clientId) {
      createBorrowedBook({ variables: { bookId, clientId, borrowedDate, dueDate } });
      setBookName('');
      setClientName('');
      setBorrowedDate('');
      setDueDate('');
      setAuthorId(null);
      setLibraryId(null);
    }
  }, [createBorrowedBook, bookId, clientId, borrowedDate, dueDate]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      <input type="text" placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
      <input type="date" placeholder="Borrowed Date" value={borrowedDate} onChange={(e) => setBorrowedDate(e.target.value)} />
      <input type="date" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add Borrowed Book</button>
    </form>
  );
};

export default AddBorrowedBook;