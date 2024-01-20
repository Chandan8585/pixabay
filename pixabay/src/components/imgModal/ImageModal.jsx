// import React from 'react';
// import "./imagemodal.css";
// import { useModal } from '../context/ModalContext';

// const ImageModal = ({ imageUrl, altText, onClose }) => {
//   const { isModalOpen } = useModal(); 

//   return (
//     isModalOpen && (
//       <div className="modal-overlay" onClick={onClose}>
//         <div className="modal-content">
//           <img src={imageUrl} alt={altText} />
//           {/* Additional image details can be displayed here */}
//         </div>
//       </div>
//     )
//   );
// };

// export default ImageModal;




import React, { useState } from 'react';
import './imagemodal.css';
import modalImage from "../../assets/modalImg.png";
const ImageModal = ({ imageUrl, altText, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('medium'); // Default size is medium

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
        <h2>Preview ID:<span>48777</span></h2>
        <button>
        <span className="material-icons">close</span>
        </button>
      </header>
 <section className='image_download_section'>
        <div className="image-container">
          <img src={modalImage} alt={altText} />
        </div>
<section className='image_section_modal'>
<div className='download_option_container'>
   <p className='container_heading'>Download</p>
        <div className="size-options">
          <label>
            <input type="radio" value="small" checked={selectedSize === 'small'} onChange={() => handleSizeChange('small')} />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={selectedSize === 'medium'}
              onChange={() => handleSizeChange('medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="big"
              checked={selectedSize === 'big'}
              onChange={() => handleSizeChange('big')}
            />
            Big
          </label>
          <label>
            <input
              type="radio"
              value="original"
              checked={selectedSize === 'original'}
              onChange={() => handleSizeChange('original')}
            />
            Original
          </label>
         
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
