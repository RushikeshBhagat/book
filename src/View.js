import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './View.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const View = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/view', {
        headers: {
            Accept: 'application/json',      
      },
    })
      .then((response) => {
        setBookData(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/del/${id}`,{headers: {
        Accept: 'application/json',      
  },})
      .then((response) => {
        console.log(response.data);
        window.location.href = '/view';

        // Perform any necessary actions after successful deletion
        // For example, you can update the bookData state to remove the deleted book from the view
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };
  

  //console.log(bookData);
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Book Store</h1>
        <Link className="nav-link-home" to="/"> <FontAwesomeIcon icon={faHome} /></Link>
      </header>
      <br />
      <nav className="nav">
      <Link className="nav-link" to="/add">Add Book</Link>
      <Link className="nav-link" to="/view">View Book</Link>
      </nav>
      
      <table className="table table-striped" border="2" cellPadding="20" width="400" height="200" align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Update Book</th>
            <th>Delete Book</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book) => (
            <tr key={book.bid}>
              <td>{book.bid}</td>
              <td>{book.book_name}</td>
              <td>{book.book_price}</td>
              <td>{book.book_author}</td>
              <td>{book.book_publisher}</td>
              <td><Link className="nav-link" to={{ pathname: `/updateBook/${book.bid}`, state: { book } }}>Update</Link></td>
              <td><Link className="nav-link" onClick={() => handleDelete(book.bid)}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <footer className="footer">
        <p>&copy; Book Store App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default View;
