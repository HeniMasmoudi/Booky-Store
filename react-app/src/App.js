import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminView from './components/AdminView';
import UserView from './components/UserView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Fancy Navigation Bar */}
        <nav className="navbar">
          <div className="logo">
            <h1>Booky Store</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="/user">User View</Link>
            </li>
            <li>
              <Link className="nav-link" to="/admin">Admin View</Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/admin" element={<AdminView />} />
            <Route path="/user" element={<UserView />} />
            <Route path="/" element={<UserView />} /> {/* Default route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
