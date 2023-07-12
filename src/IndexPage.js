import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css';

const IndexPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Book Store</h1>
      </header>
      <br /><br />
      <div className="content-container">
        <nav className="nav">
        <Link className="nav-link" to="/add">Add Book</Link> 
        <Link className="nav-link" to="/view">View Book</Link>
        </nav>
      </div>
      <footer className="footer">
        <p>&copy; Book Store App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;
