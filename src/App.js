import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import View from './View';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IndexPage/>} />
      <Route exact path="/view" element={<View/>}/>
      <Route exact path="/add" element={<AddBook/>}/>
      <Route exact path="/updateBook/:bid" element={<UpdateBook/>}/>
    </Routes>
  );
};

export default App;

