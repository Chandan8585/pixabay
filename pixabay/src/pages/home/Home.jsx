import React, { useRef, useCallback } from 'react';
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
    const { isModalOpen } = useModal();
    const { data: images, loading, error, loadMore, hasMore, updateUrl } = useFetch("&image_type=photo&per_page=10");
    const observer = useRef();

    const lastImageElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });
        
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    const handleSearch = (query) => {
        updateUrl(`&q=${query}&image_type=photo&per_page=10`);
    };

    return (
        <div className='home' style={{backgroundImage: `url(${mainImg})`}}>
            <div className='navbar'>
                <Navbar/>
            </div>
            
            <h1 className='head'>Discover over 2,000,000 <br />free Stock Images</h1>

            <div className='search_section'>
                <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className='carousel_container'>
                <CarouselContainer />
            </div>
            
            <section className='image_section'>
                {loading && images.length === 0 ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    images.map((image, index) => {
                        if (images.length === index + 1) {
                            return (
                                <div ref={lastImageElementRef} key={image.id}>
                                    <ImageCard image={image} />
                                </div>
                            );
                        } else {
                            return <ImageCard image={image} key={image.id} />;
                        }
                    })
                )}
                {loading && images.length > 0 && <div>Loading more images...</div>}
            </section>
            
            {isModalOpen && <ImageModal />}
        </div>
    );
};

export default Home;