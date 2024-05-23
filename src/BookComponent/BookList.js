import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../Queries/BookQueries.js';

const BookList = ({ onEdit, onDelete }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div>
        <h2>Books List</h2>
        <table style={{ width: 'auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Genre</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Author</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Library</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Copies</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Available Copies</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.books.map((book) => (
              <tr key={book.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.genre}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.author.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.library.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.totalCopies}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.availableCopies}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => onEdit(book)} style={{ marginRight: '8px' }}>Edit</button>
                  <button onClick={() => onDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  };

export default BookList;