import React, { useState } from "react";
import { mockBooks as books } from "../mockData"; // Import mockBooks
import "../styles/UserView.css";

function UserView() {
  const [basket, setBasket] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null); // State to store selected book for details view

  const addToBasket = (book) => {
    setBasket((prev) => [...prev, book]);
  };

  const removeFromBasket = (book) => {
    setBasket(basket.filter((item) => item.id !== book.id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openBookDetails = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="UserView">
      <h1>Books Galery</h1>

      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
            <div className="book-details">
              <div className="book-title">{book.title}</div>
              <div className="book-category">{book.category}</div>
            </div>
            <button className="add-btn" onClick={() => addToBasket(book)}>
              Add to Basket
            </button>
            <button className="details-btn" onClick={() => openBookDetails(book)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      <h2>Your Basket</h2>
      <ul className="basket-list">
        {basket.map((item, index) => (
          <li key={index} className="basket-item">
            <img
              src={item.image}
              alt={item.title}
              className="basket-image"
            />
            <div className="basket-details">
              <span className="basket-title">{item.title}</span>
              <button
                className="remove-btn"
                onClick={() => removeFromBasket(item)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Book Details */}
      {selectedBook && (
        <div className="book-details-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeBookDetails}>
              &times;
            </span>
            <h2>{selectedBook.title}</h2>
            <p><strong>Category:</strong> {selectedBook.category}</p>
            <p><strong>Description:</strong> {selectedBook.description}</p>
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="modal-book-image"
            />
            <div className="book-meta">
              <p><strong>Author:</strong> {selectedBook.author}</p>
              <p><strong>Price:</strong> ${selectedBook.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserView;
