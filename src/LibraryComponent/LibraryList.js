import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LIBRARIES } from '../Queries/LibraryQueries.js';

const LibraryList = ({ onEdit, onDelete }) => {
  const { loading, error, data } = useQuery(GET_LIBRARIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

return (
  <div>
    <h2>Libraries List</h2>
    <table style={{ width: 'auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.libraries.map((library) => (
          <tr key={library.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{library.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <button onClick={() => onEdit(library)} style={{ marginRight: '8px' }}>Edit</button>
              <button onClick={() => onDelete(library.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
};

export default LibraryList;