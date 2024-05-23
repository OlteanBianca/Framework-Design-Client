import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../Queries/AuthorQueries.js';

const AuthorList = ({ onEdit, onDelete }) => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Authors List</h2>
      <table style={{ width: 'auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.authors.map((author) => (
            <tr key={author.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{author.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => onEdit(author)} style={{ marginRight: '8px' }}>Edit</button>
                <button onClick={() => onDelete(author.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default AuthorList;