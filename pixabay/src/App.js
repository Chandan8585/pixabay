import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import {  Routes, Route } from 'react-router-dom';
import SearchPage from './pages/searchpage/SearchPage';
import PageNotFound from './pages/pagenotfound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:q" element={<SearchPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    <Footer/>
    </div>
  );
}




export default App;
