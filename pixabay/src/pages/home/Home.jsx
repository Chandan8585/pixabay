import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import mainImg from "../../assets/homepage_img.png";
import SearchBar from '../../components/searchBar/SearchBar';
import ImageCard from '../../components/imgcard/ImageCard';
import { useModal } from '../../components/context/ModalContext';
import ImageModal from '../../components/imgModal/ImageModal';
import useFetch from '../../components/customhooks/useFetch';
import CarouselContainer from '../../components/carousel/CarouselContainer';

const Home = () => {
  const {isModalOpen, modalDispatch} = useModal();
     const api = "&image_type=photo&per_page=10&min_width=600&min_height=600"

   const { data, loading, error} = useFetch(api);
   const images = data;

  return (
    <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
      <div className='navbar'>
      <Navbar/>
      </div>
      
      <h1 className='head'> Discover over 2,000,000 <br />
        free Stock Images</h1>

        <div className='search_section'>
        <SearchBar/>
        </div>
        <div className='carousel_container'>
          <CarouselContainer/>
        </div>
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

export default Home