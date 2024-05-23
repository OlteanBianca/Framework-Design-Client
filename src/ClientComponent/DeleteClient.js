import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT, GET_CLIENTS } from '../Queries/ClientQueries.js';

const DeleteClient = ({ clientId, onCompleted }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  useEffect(() => {
    deleteClient({ variables: { id: clientId } });
  }, [deleteClient, clientId]);

  return null;
};

export default DeleteClient;