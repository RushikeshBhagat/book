import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookPublisher, setBookPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a JSON object with the form data
    const bookData = {
      book_name: bookName,
      book_price: bookPrice,
      book_author: bookAuthor,
      book_publisher: bookPublisher
    };

    // Make a POST request to the backend API using Axios
    axios.post('http://localhost:8080/add', bookData,
    {headers: {
        Accept: 'application/json',      
  },})
      .then(response => {
        // Handle the response from the backend if needed
        console.log(response.data);
        // Redirect to the view page
        window.location.href = '/view';
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
        <header className="header">
        <h1>Welcome to Book Store</h1>
        <Link className="nav-link-home" to="/"> <FontAwesomeIcon icon={faHome} /></Link>
      </header>
      <br/>
      <nav className="nav">
      <Link className="nav-link" to="/add">Add Book</Link>
      <Link className="nav-link" to="/view">View Book</Link>
      </nav>
      
      <form onSubmit={handleSubmit}>
      
      <div className="form-group">
      <label htmlFor="bookName">Book Name</label>
        <input
          type="text"
          name="book_name"
          placeholder="Enter book name"
          value={bookName}
          onChange={e => setBookName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="bookPrice">Book Price</label>
        <input
          type="text"
          name="book_price"
          placeholder="Enter book price"
          value={bookPrice}
          onChange={e => setBookPrice(e.target.value)}
        />
      </div>

        <div className="form-group">
        <label htmlFor="bookAuthor">Book Author</label>
        <input
          type="text"
          name="book_author"
          placeholder="Enter book author"
          value={bookAuthor}
          onChange={e => setBookAuthor(e.target.value)}
        />
        </div>

        <div className="form-group">
        <label htmlFor="bookPublisher">Book Publisher</label>
        <input
          type="text"
          name="book_publisher"
          placeholder="Enter book publisher"
          value={bookPublisher}
          onChange={e => setBookPublisher(e.target.value)}
        />
        </div>
        <button type="submit"> Add Book</button>
      </form>
      <footer className="footer">
        <p>&copy; Book Store App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AddBook;
