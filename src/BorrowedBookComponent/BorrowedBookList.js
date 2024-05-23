import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BORROWED_BOOKS } from '../Queries/BorrowedBookQueries.js';

const BorrowedBookList = ({ onEdit, onDelete }) => {
  const { loading, error, data } = useQuery(GET_BORROWED_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Borrowed books list</h2>
      <table style={{ width: 'auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Borrower</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Borrowed Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Due Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.borrowedBooks.map((borrowedBook) => (
            <tr key={borrowedBook.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{borrowedBook.book.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{borrowedBook.client.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{borrowedBook.borrowedDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{borrowedBook.dueDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => onEdit(borrowedBook)} style={{ marginRight: '8px' }}>Edit</button>
                <button onClick={() => onDelete(borrowedBook.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default BorrowedBookList;