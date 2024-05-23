import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_AUTHOR, GET_AUTHORS } from '../Queries/AuthorQueries.js';

const UpdateAuthor = ({ author, onCompleted }) => {
  const [name, setName] = useState(author.name);

  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAuthor({ variables: { id: author.id, name } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Author Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Update Author</button>
    </form>
  );
};

export default UpdateAuthor;