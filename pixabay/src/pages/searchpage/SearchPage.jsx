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
import CarouselContainer from '../../components/carousel/CarouselContainer';

const SearchPage = () => {
  const {isModalOpen, modalDispatch} = useModal();
 
  const {searchedValue, imgCategory} = useSearchedImage();
     const api = `?key=41916060-0d18786264e11e3348ef0bc93&q=${searchedValue}&image_type=photo&per_page=20&min_width=600&min_height=600`;

   const [images, setImages] = useState([]);
  //  const [catImages, setCatImages] = useState([]);
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


  //  useEffect(() => {
  //    (async () => {
  //      try {
  //        const { data } = await axios.get(
  //          `https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&category=${imgCategory}`
  //        );
  //        setCatImages(data.hits);
  //        console.log(catImages);
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    })();
  //  }, [imgCategory]);
 

  return (
    <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
      
      <div className='navbar'>
      <Navbar/>
      </div>
        <div className='search_section'>
        <SearchBar/>
        </div>
        <div className='carousel_container'>
          <CarouselContainer/> 
        </div>
        <h1 className='head result'>Showing Results for {searchedValue.toUpperCase()}</h1>
        <section className='image_section'>
         { 
        
        images?.map((image)=> {
            return(
              <ImageCard image = {image} key={image.id} /> 
            )
          })
         }
        </section>
        {/* <section>
        
          {catImages?.map((catImage) => (
            <ImageCard key={catImage.id} items={catImage} />
          ))}
         
        </section> */}
        {isModalOpen  && <ImageModal />} 
     
  
    </div>
  
  )
}

export default SearchPage