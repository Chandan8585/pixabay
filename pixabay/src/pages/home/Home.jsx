import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import mainImg from "../../assets/homepage_img.png";
import SearchBar from '../../components/searchBar/SearchBar';
import axios from 'axios';
import ImageCard from '../../components/imgcard/ImageCard';
import { useModal } from '../../components/context/ModalContext';
import ImageModal from '../../components/imgModal/ImageModal';



const Home = () => {
  const [images, setImages] = useState([]);
  const {isModalOpen, modalDispatch} = useModal();
    useEffect(()=> {
      generateImage(); 
    }, []);

    const generateImage = async()=> {
      try {
        const data = await axios.get("https://pixabay.com/api/?key=41916060-0d18786264e11e3348ef0bc93&image_type=photo&per_page=10&min_width=600&min_height=600");
        setImages(data?.data?.hits);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
         }

     const handleModalClick = ()=> {
      modalDispatch({
        type: "MODAL_OPEN"
      })
     }   
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
        <section className='image_section'>
         {
          images?.map((image)=> {
            return(
              <ImageCard image = {image} key={image.id} onClick={handleModalClick}/>
            )
          })
         }
        </section>
        
   <ImageModal />
  
    </div>
  
  )
}

export default Home