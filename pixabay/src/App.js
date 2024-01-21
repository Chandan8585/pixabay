import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import {  Routes, Route } from 'react-router-dom';
import SearchPage from './pages/searchpage/SearchPage';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Search' element={<SearchPage/>}/>
        <Route path="/search/:_id" element={<SearchPage/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    <Footer/>
    </div>
  );
}




export default App;
