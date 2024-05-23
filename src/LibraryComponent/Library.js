import React, { useState } from 'react';
import AddLibrary from './AddLibrary.js';
import LibraryList from './LibraryList.js';
import UpdateLibrary from './UpdateLibrary.js';
import DeleteLibrary from './DeleteLibrary.js';

const LibraryManagement = () => {
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const [deletedLibraryId, setDeletedLibraryId] = useState(null);

  const handleEdit = (library) => {
    setSelectedLibrary(library);
  };

  const handleDelete = (libraryId) => {
    setDeletedLibraryId(libraryId);
    setSelectedLibrary(null);
  };

  const handleUpdateCompleted = () => {
    setSelectedLibrary(null)
  }

  const handleDeleteCompleted = () => {
    setDeletedLibraryId(null)
  }

  return (
    <div>
      <h1>Library Management</h1>
      <AddLibrary />
      <LibraryList onEdit={handleEdit} onDelete={handleDelete} />
      {selectedLibrary && (
        <UpdateLibrary library={selectedLibrary} key={selectedLibrary.id} onCompleted={handleUpdateCompleted}/>
      )}
      {deletedLibraryId && (
        <DeleteLibrary libraryId={deletedLibraryId} onCompleted={handleDeleteCompleted} />
      )}
    </div>
  );
};

export default LibraryManagement;