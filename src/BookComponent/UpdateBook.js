import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BOOK, GET_BOOKS } from '../Queries/BookQueries.js';

const UpdateBook = ({ book, onCompleted }) => {
  const [title, setTitle] = useState(book.title);
  const [genre, setGenre] = useState(book.genre);
  const [totalCopies, setTotalCopies] = useState(book.totalCopies);
  const [availableCopies, setAvailableCopies] = useState(book.availableCopies);

  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ variables: { id: book.id, title, genre, authorId: book.author.id, libraryId : book.library.id, totalCopies, availableCopies } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="number" placeholder="Total Copies" value={totalCopies} onChange={(e) => setTotalCopies(parseInt(e.target.value))} />
      <input type="number" placeholder="Available Copies" value={availableCopies} onChange={(e) => setAvailableCopies(parseInt(e.target.value))} />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;