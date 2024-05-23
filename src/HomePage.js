import React from 'react';
import ClientManagement from './ClientComponent/Client.js';
import BookManagement from './BookComponent/Book.js';
import AuthorManagement from './AuthorComponent/Author.js';
import LibraryManagement from './LibraryComponent/Library.js';
import BorrowedBookManagement from './BorrowedBookComponent/BorrowedBook.js';
import Background from './background.jpg';

const HomePage = () => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const background = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  };

  return (
    <div style={background}>
      <div style={divStyle}>
        <h1>Library Management</h1>
        <ClientManagement />
        <BookManagement />
        <AuthorManagement />
        <LibraryManagement />
        <BorrowedBookManagement />
      </div>
    </div>
  );
};

export default HomePage;