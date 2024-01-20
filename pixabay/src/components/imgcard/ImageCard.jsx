import React from 'react'
import "./imgcard.css";
const ImageCard = ({image}) => {
    const {largeImageURL, tags} = image
  return (
    <div className="image-card">
    <img src={largeImageURL} alt="Sample_Image" className='image'/>
    <div className="tags">
        <span>{tags}</span>
      {/* {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))} */}
    </div>
  </div>
  )
}

export default ImageCard