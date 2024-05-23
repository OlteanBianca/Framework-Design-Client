import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CLIENT, GET_CLIENTS } from '../Queries/ClientQueries.js';

const AddClient = () => {
  const [name, setName] = useState('');

  const [createClient] = useMutation(CREATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createClient({ variables: { name } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Client Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default AddClient;