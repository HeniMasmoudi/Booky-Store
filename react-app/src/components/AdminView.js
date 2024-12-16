import React, { useState } from 'react';
import { mockBooks as books, mockCategories as categories } from "../mockData";
import '../styles/AdminView.css';

function AdminView() {
  const [booksData, setBooks] = useState(books);
  const [newBook, setNewBook] = useState({ title: "", category: "", image: "" });
  const [editing, setEditing] = useState(false);
  const [editingBook, setEditingBook] = useState({});

  const addBook = () => {
    const newId = booksData.length + 1;
    const bookToAdd = { id: newId, ...newBook };
    setBooks([...booksData, bookToAdd]);
    setNewBook({ title: "", category: "", image: "" });
  };

  const editBook = (book) => {
    setEditing(true);
    setEditingBook({ ...book });
  };

  const updateBook = () => {
    setBooks(
      booksData.map((book) =>
        book.id === editingBook.id ? editingBook : book
      )
    );
    setEditing(false);
  };

  const deleteBook = (id) => {
    setBooks(booksData.filter((book) => book.id !== id));
  };

  return (
    <div className="AdminView">
      <h1>Admin Panel</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
        }}
      >
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          placeholder="Book Title"
          required
        />
        <select
          value={newBook.category}
          onChange={(e) =>
            setNewBook({ ...newBook, category: e.target.value })
          }
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newBook.image}
          onChange={(e) =>
            setNewBook({ ...newBook, image: e.target.value })
          }
          placeholder="Image URL"
        />
        <button type="submit">Add Book</button>
      </form>

      <div className="book-list">
        {booksData.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
            <div>
              <div className="title">{book.title}</div>
              <div className="category">{book.category}</div>
            </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => editBook(book)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteBook(book.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <form
          className="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            updateBook();
          }}
        >
          <input
            type="text"
            value={editingBook.title}
            onChange={(e) =>
              setEditingBook({ ...editingBook, title: e.target.value })
            }
            required
          />
          <select
            value={editingBook.category}
            onChange={(e) =>
              setEditingBook({ ...editingBook, category: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={editingBook.image}
            onChange={(e) =>
              setEditingBook({ ...editingBook, image: e.target.value })
            }
            placeholder="Image URL"
          />
          <button type="submit">Update Book</button>
        </form>
      )}
    </div>
  );
}

export default AdminView;
