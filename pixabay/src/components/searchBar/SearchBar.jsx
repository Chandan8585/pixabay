import React from 'react';
import "./searchBar.css";
import { useSearchedImage } from '../context/SearchContext';
import { Link } from 'react-router-dom';
const SearchBar = () => {
  const {searchedValue, searchedDispatch} = useSearchedImage();
  const handleSearchInput = (event)=> {
    searchedDispatch({
      type:"SEARCHED_VALUE",
      payload:event.target.value
    })
    localStorage.setItem("searchedValue",(searchedValue));
  }
  return (
    <div className='search_container'>
      <div className='search_input'>
      <i className="material-icons">search</i>
      <input type="text" placeholder='Search that you want to see' className='input' onChange={handleSearchInput} value={searchedValue}/>
      </div>
     <Link to="/search"><button className='search_btn'>Go !</button></Link>
    </div>
  )
}

export default SearchBar