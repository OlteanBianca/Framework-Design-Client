import React, { useState } from 'react';
import AddBorrowedBook from './AddBorrowedBook.js';
import BorrowedBookList from './BorrowedBookList.js';
import UpdateBorrowedBook from './UpdateBorrowedBook.js';
import DeleteBorrowedBook from './DeleteBorrowedBook.js';

const BorrowedBookManagement = () => {
  const [selectedBorrowedBook, setSelectedBorrowedBook] = useState(null);
  const [deletedBorrowedBookId, setDeletedBorrowedBookId] = useState(null);

  const handleEdit = (borrowedBook) => {
    setSelectedBorrowedBook(borrowedBook);
  };

  const handleDelete = (borrowedBookId) => {
    setDeletedBorrowedBookId(borrowedBookId);
    setSelectedBorrowedBook(null);
  };

  const handleUpdateCompleted = () => {
    setSelectedBorrowedBook(null)
  }

  const handleDeleteCompleted = () => {
    setDeletedBorrowedBookId(null)
  }

  return (
    <div>
      <h1>Borrowed Book Management</h1>
      <AddBorrowedBook />
      <BorrowedBookList onEdit={handleEdit} onDelete={handleDelete} />
      {selectedBorrowedBook && (
        <UpdateBorrowedBook borrowedBook={selectedBorrowedBook} key={selectedBorrowedBook.id} onCompleted={handleUpdateCompleted}/>
      )}
      {deletedBorrowedBookId && (
        <DeleteBorrowedBook borrowedBookId={deletedBorrowedBookId} onCompleted={handleDeleteCompleted} />
      )}
    </div>
  );
};

export default BorrowedBookManagement;

