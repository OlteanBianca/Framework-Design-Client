import React, { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_BOOK, GET_BOOKS } from '../Queries/BookQueries.js';
import { GET_AUTHOR_ID } from '../Queries/AuthorQueries.js';
import { GET_LIBRARY_ID } from '../Queries/LibraryQueries.js';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [libraryName, setLibraryName] = useState('');
  const [totalCopies, setTotalCopies] = useState(0);
  const [authorId, setAuthorId] = useState(null);
  const [libraryId, setLibraryId] = useState(null);

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const [getAuthorId, { data: authorData }] = useLazyQuery(GET_AUTHOR_ID);
  const [getLibraryId, { data: libraryData }] = useLazyQuery(GET_LIBRARY_ID);

  useEffect(() => {
    if (authorData && authorData.authorId) {
      setAuthorId(authorData.authorId.id);
    }
  }, [authorData]);

  useEffect(() => {
    if (libraryData && libraryData.libraryId) {
      setLibraryId(libraryData.libraryId.id);
    }
  }, [libraryData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorName || !libraryName) {
      alert('Please enter both author and library names.');
      return;
    }

    getAuthorId({ variables: { name: authorName } });
    getLibraryId({ variables: { name: libraryName } });
  };

  useEffect(() => {
    if (authorId && libraryId) {
      createBook({ variables: { title, genre, authorId, libraryId, totalCopies } });
      setTitle('');
      setGenre('');
      setAuthorName('');
      setLibraryName('');
      setTotalCopies(0);
      setAuthorId(null);
      setLibraryId(null);
    }
  }, [authorId, libraryId, createBook, title, genre, totalCopies]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="text" placeholder="Author Name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      <input type="text" placeholder="Library Name" value={libraryName} onChange={(e) => setLibraryName(e.target.value)} />
      <input type="number" placeholder="Total Copies" value={totalCopies} onChange={(e) => setTotalCopies(parseInt(e.target.value))} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;