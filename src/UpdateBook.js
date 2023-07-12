import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const UpdateBook = () => {
  const { bid } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    book_name: '',
    book_price: '',
    book_author: '',
    book_publisher: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/updateBook/${bid}`,{
            headers: {
                Accept: 'application/json',      
          },
        });
        if (response.data) {
          setBook(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [bid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/update/${bid}`, book,{
        headers: {
            Accept: 'application/json',      
      },
    });
      navigate('/view'); // Redirect to the view page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Book Store</h1>
        <Link className="nav-link-home" to="/"> <FontAwesomeIcon icon={faHome} /></Link>
      </header>
      <br /><br />
      <form onSubmit={handleSubmit}>
      
      <div className="form-group">
      <label htmlFor="bookName">Book Name</label>
      <input
      type="text"
      name="book_name"
      placeholder="Enter book name"
      value={book?.book_name || ''}
      onChange={handleChange}
      />
      </div>

      <div className="form-group">
      <label htmlFor="bookPrice">Book Price</label>
      <input
        type="text"
        name="book_price"
        placeholder="Enter book price"
        value={book?.book_price || ''}
        onChange={handleChange}
      />
      </div>

      <div className="form-group">
      <label htmlFor="bookAuthor">Book Author</label>
      <input
        type="text"
        name="book_author"
        placeholder="Enter book author"
        value={book?.book_author || ''}
        onChange={handleChange}
      />
      </div>

      <div className="form-group">
      <label htmlFor="bookPublisher">Book Publisher</label>
      <input
        type="text"
        name="book_publisher"
        placeholder="Enter book publisher"
        value={book?.book_publisher || ''}
        onChange={handleChange}
      />
      </div>

      <button type="submit"> Update Book</button>
      </form>
      <footer className="footer">
        <p>&copy; Book Store App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UpdateBook;
