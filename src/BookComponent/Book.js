import React, { useState } from 'react';
import AddBook from './AddBook.js';
import BookList from './BookList.js';
import UpdateBook from './UpdateBook.js';
import DeleteBook from './DeleteBook.js';

const BookManagement = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [deletedBookId, setDeletedBookId] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleDelete = (bookId) => {
    setDeletedBookId(bookId);
    setSelectedBook(null);
  };

  const handleUpdateCompleted = () => {
    setSelectedBook(null)
  }

  const handleDeleteCompleted = () => {
    setDeletedBookId(null)
  }

  return (
    <div>
      <h1>Book Management</h1>
      <AddBook />
      <BookList onEdit={handleEdit} onDelete={handleDelete} />
      {selectedBook && (
        <UpdateBook book={selectedBook} key={selectedBook.id} onCompleted={handleUpdateCompleted}/>
      )}
      {deletedBookId && (
        <DeleteBook bookId={deletedBookId} onCompleted={handleDeleteCompleted} />
      )}
    </div>
  );
};

export default BookManagement;