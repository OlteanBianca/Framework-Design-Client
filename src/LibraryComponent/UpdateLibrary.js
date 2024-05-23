import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_LIBRARY, GET_LIBRARIES } from '../Queries/LibraryQueries.js';

const UpdateLibrary = ({ library, onCompleted }) => {
  const [name, setName] = useState(library.name);

  const [updateLibrary] = useMutation(UPDATE_LIBRARY, {
    refetchQueries: [{ query: GET_LIBRARIES }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLibrary({ variables: { id: library.id, name } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Library Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Update Library</button>
    </form>
  );
};

export default UpdateLibrary;
