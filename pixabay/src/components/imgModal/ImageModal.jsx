import React, { useState } from 'react';
import './imagemodal.css';
import { useModal } from '../context/ModalContext';

const ImageModal = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const { isModalOpen, modalImage, modalDispatch } = useModal();

  if (!isModalOpen || !modalImage) return null;
  const { 
    id,
    largeImageURL, 
    tags, 
    user, 
    likes, 
    views,
    downloads,
    type,
    user_id,
    webformatURL
  } = modalImage;

  const handleDownload = (e) => {
    e.preventDefault();
    fetch(webformatURL, {
      method: "GET",
      headers: {},
    })
    .then((response) => {
      response.arrayBuffer().then(function(buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `image-${id}.jpg`);
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="modal-overlay" onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className='modal_header'>
          <h2>Preview ID: <span>{id}</span></h2>
          <button onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}>
            <span className="material-icons close">close</span>
          </button>
        </header>
        
        <section className='image_download_section'>
          <div className="image-container">
            <img src={largeImageURL} alt={tags} width={832} className='im'/>
            <div className="image-overlay">
              <div className="stats">
                <span className="stat-item">❤️ {likes}</span>
                <span className="stat-item">👁️ {views}</span>
              </div>
              <div className="photographer">📷 {user}</div>
            </div>
          </div>
          
          <section className='image_section_modal'>
            <div className='download_option_container'>
              <p className='container_heading'>Download</p>
              <div className="size_options">
                <div className='download_small_container'>
                  <label htmlFor='small'>Small</label>
                  <div className='option_box'>
                    <p style={{margin: "10px"}}>640x960</p>
                    <input type="radio" value="small" checked={selectedSize === 'small'} 
                      onChange={() => handleSizeChange('small')} name='small'/>
                  </div>
                </div>
                <div className='download_small_container'>
                  <label htmlFor="medium">Medium</label>
                  <div className='option_box'>
                    <p style={{margin: "10px"}}>1920x2660</p>
                    <input type="radio" value="medium" checked={selectedSize === 'medium'} 
                      onChange={() => handleSizeChange('medium')} name="medium"/>
                  </div>
                </div>
                <div className='download_small_container'>
                  <label htmlFor="big">Big</label>
                  <div className='option_box'>
                    <p style={{margin: "10px"}}>2400x3600</p>
                    <input type="radio" value="big" checked={selectedSize === 'big'} 
                      onChange={() => handleSizeChange('big')} name="big"/>
                  </div>
                </div>
                <div className='download_small_container'>
                  <label htmlFor="original">Original</label>
                  <div className='option_box'>
                    <p style={{margin: "10px"}}>Original Size</p>
                    <input type="radio" value="original" checked={selectedSize === 'original'} 
                      onChange={() => handleSizeChange('original')} name="original"/>
                  </div>
                </div> 
              </div>
              
              <a href={webformatURL} download onClick={handleDownload} className='download_btn'>
                Download for free!
              </a>
            </div>
            
            <div className='image_information'>
              <p className='container_heading'>Information</p>
              <div className='img_container'>
                <div className='image_info'>
                  <p className='img_info_heading'>User</p>
                  <p className='img_info_response'>{user}</p>
                </div>
                <div className='image_info'>
                  <p className='img_info_heading'>Likes</p>
                  <p className='img_info_response'>{likes}</p>
                </div>
                <div className='image_info'>
                  <p className='img_info_heading'>Downloads</p>
                  <p className='img_info_response'>{downloads}</p>
                </div>
                <div className='image_info'>
                  <p className='img_info_heading'>Views</p>
                  <p className='img_info_response'>{views}</p>
                </div>
                <div className='image_info'>
                  <p className='img_info_heading'>Type</p>
                  <p className='img_info_response'>{type}</p>
                </div>
                <div className='image_info'>
                  <p className='img_info_heading'>User ID</p>
                  <p className='img_info_response'>{user_id}</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ImageModal;