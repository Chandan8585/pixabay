import React, { useEffect, useState } from 'react';
import './imagemodal.css'; // Make sure imagemodal.css file is present
import modalImage from "../../assets/modalImg.png";
import { useModal } from '../context/ModalContext';
import axios from 'axios';

const ImageModal = ({ imageUrl, altText, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('medium'); // Default size is medium
  const [imgDetails , setImageDetails] = useState([]);
  const {modalImgID, modalDispatch} = useModal();

   useEffect(()=> {
    const generateModalDetails = async()=> {
        try {
            const data = await axios.get(`https://pixabay.com/api/?key=41916060-0d18786264e11e3348ef0bc93&id=${modalImgID}`);
            setImageDetails(data?.data?.hits[0]);
            console.log("img modal", data?.data?.hits[0]);
        } catch (error) {
            console.log(error);
        }
    }
    generateModalDetails();
   }, [modalImgID])


  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleDownload = () => {
    // Here, you can implement the logic for downloading the selected size of the image.
    // For simplicity, let's log the selected size to the console.
    console.log(`Downloading ${selectedSize} image: ${imageUrl}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <header className='modal_header'>
          <h2>Preview ID:<span>{imgDetails?.id}</span></h2>
          <button onClick={()=> modalDispatch({type: "MODAL_CLOSE"})}>
            <span className="material-icons close">close</span>
          </button>
        </header>
        <section className='image_download_section'>
          <div className="image-container">
            <img src={imgDetails?.largeImageURL} alt={altText} width={832} className='im'/>
          </div>
          <section className='image_section_modal'>
            <div className='download_option_container'>
              <p className='container_heading'>Download</p>
              <div className="size_options">
                <div className='download_small_container'>
                <label htmlFor='small'> Small  </label>
                <div className='option_box'>
                <p style={{margin: "10px"}}>640x960</p>
                  <input type="radio" value="small" checked={selectedSize === 'small'} onChange={() => handleSizeChange('small')} name='small'/>
                  </div>
                 </div>
                 <div className='download_small_container'>
                <label htmlFor="medium"> Medium  </label>
                <div className='option_box'>
                <p style={{margin: "10px"}}>1920x2660</p>
                  <input type="radio" value="medium" checked={selectedSize === 'medium'} onChange={() => handleSizeChange('medium')} name="medium"/>
                  </div>
                 </div>
                 <div className='download_small_container'>
                <label htmlFor="big"> Big  </label>
                <div className='option_box'>
                <p style={{margin: "10px"}}>2400x3600</p>
                  <input type="radio" value="big" checked={selectedSize === 'big'} onChange={() => handleSizeChange('big')} name="big"/>
                  </div>
                 </div>
                 <div className='download_small_container'>
                <label htmlFor="original"> Original  </label>
                <div className='option_box'>
                <p style={{margin: "10px"}}>640x960</p>
                  <input type="radio" value="original" checked={selectedSize === 'original'} onChange={() => handleSizeChange('original')} name="original"/>
                  </div>
                 </div> 
              </div>
              <button className='download_btn' onClick={handleDownload}>Download</button>
            </div>
            <div className='image_information'>
              <p className='container_heading'>Information</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ImageModal;
