import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_CLIENT, GET_CLIENTS } from '../Queries/ClientQueries.js';

const UpdateClient = ({ client, onCompleted }) => {
  const [name, setName] = useState(client.name);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient({ variables: { id: client.id, name } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Client Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Update Client</button>
    </form>
  );
};

export default UpdateClient;