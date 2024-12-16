import React from 'react';

// Mock data with category
const books = [
  { id: 1, title: 'Book 1', description: 'A great book', category: 'Fiction', image: '/images/book1.jpg' },
  { id: 2, title: 'Book 2', description: 'Another great book', category: 'Action', image: '/images/book2.jpg' },
  { id: 3, title: 'Book 3', description: 'Yet another great book', category: 'Fantasy', image: '/images/book3.jpg' },
];

function BookGallery() {
  return (
    <div className="book-gallery">
      {books.map((book) => (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <img src={book.image} alt={book.title} />
          <p>{book.description}</p>
          <span className="category">{book.category}</span>
        </div>
      ))}
    </div>
  );
}

export default BookGallery;
