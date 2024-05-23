import React, { useState } from 'react';
import AddAuthor from './AddAuthor.js';
import AuthorList from './AuthorList.js';
import UpdateAuthor from './UpdateAuthor.js';
import DeleteAuthor from './DeleteAuthor.js';

const AuthorManagement = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [deletedAuthorId, setDeletedAuthorId] = useState(null);

  const handleEdit = (author) => {
    setSelectedAuthor(author);
  };

  const handleDelete = (authorId) => {
    setDeletedAuthorId(authorId);
    setSelectedAuthor(null);
  };

  const handleUpdateCompleted = () => {
    setSelectedAuthor(null)
  }

  const handleDeleteCompleted = () => {
    setDeletedAuthorId(null)
  }
  return (
    <div>
      <h1>Author Management</h1>
      <AddAuthor />
      <AuthorList onEdit={handleEdit} onDelete={handleDelete} />
      {selectedAuthor && (
        <UpdateAuthor author={selectedAuthor} key={selectedAuthor.id} onCompleted={handleUpdateCompleted}/>
      )}
      {deletedAuthorId && (
        <DeleteAuthor authorId={deletedAuthorId} onCompleted={handleDeleteCompleted} />
      )}
    </div>
  );
};

export default AuthorManagement;