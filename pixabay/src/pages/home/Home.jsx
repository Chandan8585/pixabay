import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import mainImg from "../../assets/homepage_img.png";
import SearchBar from '../../components/searchBar/SearchBar';
const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
      <div className='navbar'>
      <Navbar/>
      </div>
      
      <h1 className='heading'> Discover over 2,000,000 <br />
        free Stock Images</h1>
        <div className='search_section'>
        <SearchBar/>
        </div>
     
    </div>
  
  )
}

export default Home