import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_AUTHOR, GET_AUTHORS } from '../Queries/AuthorQueries.js';

const AddAuthor = () => {
  const [name, setName] = useState('');

  const [createAuthor] = useMutation(CREATE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor({ variables: { name } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Author Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthor;