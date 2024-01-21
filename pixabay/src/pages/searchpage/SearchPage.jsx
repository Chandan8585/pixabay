import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./searchpage.css";
import mainImg from "../../assets/homepage_img.png";
// import SearchBar from '../../components/searchBar/SearchBar';

import ImageCard from '../../components/imgcard/ImageCard';
import { useModal } from '../../components/context/ModalContext';
import ImageModal from '../../components/imgModal/ImageModal';
import useFetch from '../../customhooks/useFetch';
import SearchBar from '../../components/searchBar/SearchBar';

const SearchPage = () => {
  const {isModalOpen, modalDispatch} = useModal();
     const api = "&image_type=photo&per_page=10&min_width=600&min_height=600"

   const { data, loading, error} = useFetch(api);
   const images = data;

  return (
    <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
      <div className='navbar'>
      <Navbar/>
      </div>
      
    

        <div className='search_section'>
        <SearchBar/>
        </div>
        <h1 className='heading'>Search Images</h1>
        <section className='image_section'>
         { 
         loading ?  "Loading" :
          images?.map((image)=> {
            return(
          
              <ImageCard image = {image} key={image.id} />
      
            )
          })
         }
        </section>
        {isModalOpen  && <ImageModal />} 
     
  
    </div>
  
  )
}

export default SearchPage