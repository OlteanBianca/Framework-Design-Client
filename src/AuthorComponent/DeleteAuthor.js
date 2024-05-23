import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_AUTHOR, GET_AUTHORS } from '../Queries/AuthorQueries.js';

const DeleteAuthor = ({ authorId, onCompleted }) => {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
    onCompleted: () => {
      if (onCompleted) {
        onCompleted();
      }
    }
  });

  useEffect(() => {
    deleteAuthor({ variables: { id: authorId } });
  }, [deleteAuthor, authorId]);

  return null;
};

export default DeleteAuthor;