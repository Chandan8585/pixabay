import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./searchpage.css";
import mainImg from "../../assets/homepage_img.png";
import ImageCard from '../../components/imgcard/ImageCard';
import { useModal } from '../../components/context/ModalContext';
import ImageModal from '../../components/imgModal/ImageModal';
import SearchBar from '../../components/searchBar/SearchBar';
import { useSearchedImage } from '../../components/context/SearchContext';
import axios from 'axios';

const SearchPage = () => {
  const {isModalOpen, modalDispatch} = useModal();
  const {searchedValue} = useSearchedImage();
     const api = `?key=41916060-0d18786264e11e3348ef0bc93&q=${searchedValue}&image_type=photo&per_page=20&min_width=600&min_height=600`;

   const [images, setImages] = useState([]);
   useEffect(() => {
     (async () => {
       try { 
         const { data } = await axios.get(
          `https://pixabay.com/api/${api}`
         );
         setImages(data?.hits);
         console.log(images);
       } catch (error) {
         console.log(error);
       }
     })();
   }, [searchedValue]);


  return (
    <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
      
      <div className='navbar'>
      <Navbar/>
      </div>
        <div className='search_section'>
        <SearchBar/>
        </div>
        <h1 className='head result'>Showing Results for {searchedValue.toUpperCase()}</h1>
        <section className='image_section'>
         { 
        //  loading ?  "Loading" :
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