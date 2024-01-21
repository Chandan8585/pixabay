import React from 'react';
import "./searchBar.css";
const SearchBar = () => {
  return (
    <div className='search_container'>
      <div className='search_input'>
      <i className="material-icons">search</i>
      <input type="text" placeholder='Search that you want to see' className='input' />
      </div>
     <button className='search_btn'>Go !</button>
    </div>
  )
}

export default SearchBar