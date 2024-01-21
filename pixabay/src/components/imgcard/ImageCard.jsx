import React from 'react'
import "./imgcard.css";
import { useModal } from '../context/ModalContext';
 
const ImageCard = ({image}) => {
    const {largeImageURL, tags} = image;
    const { modalDispatch} = useModal();

    const handleModalClick = (imgID)=> {
        modalDispatch({
          type: "IMAGE_URL",
          payload: imgID
        })
        modalDispatch({
          type: "MODAL_OPEN"
        })
       
       }
  return (
    <div className="image-card" onClick={()=>handleModalClick(image.id)}>
    <img src={largeImageURL} alt="Sample_Image" className='image'/>
    <div className="tags">
        {tags.split(',').map((tag, index) => (
          <span key={index} className="tag">{tag.trim()}</span>
        ))}
      </div>
  </div>
  )
}

export default ImageCard


