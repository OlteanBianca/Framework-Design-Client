import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../Queries/ClientQueries.js';

const ClientList = ({ onEdit, onDelete }) => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

return (
  <div>
    <h2>Clients List</h2>
    <table style={{ width: 'auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map((client) => (
          <tr key={client.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{client.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <button onClick={() => onEdit(client)} style={{ marginRight: '8px' }}>Edit</button>
              <button onClick={() => onDelete(client.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
};

export default ClientList;