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
  const { isModalOpen } = useModal();
  const { searchedValue, imgCategory, searchedDispatch } = useSearchedImage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      return data?.hits || [];
    } catch (error) {
      setError("Failed to fetch images");
      console.log(error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchedValue) {
      const api = `https://pixabay.com/api/?key=41916060-0d18786264e11e3348ef0bc93&q=${searchedValue}&image_type=photo&per_page=20&min_width=600&min_height=600`;
      fetchImages(api).then(setImages);
    } else if (imgCategory) {
      const api = `https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&category=${imgCategory}&image_type=photo&per_page=20`;
      fetchImages(api).then(setImages);
    } else {
      setImages([]); 
    }
  }, [searchedValue, imgCategory]);

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
      
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      
      {(searchedValue || imgCategory) && (
        <>
          <h1 className='head result'>
            Showing Results for {(searchedValue || imgCategory).toUpperCase()}
          </h1>
          <section className='image_section'>
            {images?.map((image) => (
              <ImageCard image={image} key={image.id} /> 
            ))}
          </section>
        </>
      )}
      
      {isModalOpen && <ImageModal />} 
    </div>
  );
};

export default SearchPage;