import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import {  Routes, Route } from 'react-router-dom';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    <Footer/>
    </div>
  );
}




export default App;
