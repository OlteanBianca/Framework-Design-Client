import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_LIBRARY, GET_LIBRARIES } from '../Queries/LibraryQueries.js';

const DeleteLibrary = ({ libraryId, onCompleted }) => {
  const [deleteLibrary] = useMutation(DELETE_LIBRARY, {
    refetchQueries: [{ query: GET_LIBRARIES }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  useEffect(() => {
    deleteLibrary({ variables: { id: libraryId } });
  }, [deleteLibrary, libraryId]);

  return null;
};

export default DeleteLibrary;