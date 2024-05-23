import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LIBRARY, GET_LIBRARIES } from '../Queries/LibraryQueries.js';

const AddLibrary = () => {
  const [name, setName] = useState('');

  const [createLibrary] = useMutation(CREATE_LIBRARY, {
    refetchQueries: [{ query: GET_LIBRARIES }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createLibrary({ variables: { name } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Library Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Library</button>
    </form>
  );
};

export default AddLibrary;