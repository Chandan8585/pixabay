import React from 'react';
import "./imgcard.css";
import { useModal } from '../context/ModalContext';

const ImageCard = ({ image }) => {
    const { largeImageURL, tags, user, likes, views } = image;
    const { modalDispatch } = useModal();

    const handleModalClick = (imgID) => {
        modalDispatch({
            type: "IMAGE_URL",
            payload: imgID
        });
        modalDispatch({
            type: "MODAL_OPEN"
        });
    };

    return (
        <div className="image-card" onClick={() => handleModalClick(image.id)}>
            <div className="image-container">
                <img src={largeImageURL} alt={tags} className='image' loading="lazy" />
                <div className="image-overlay">
                    <div className="stats">
                        <span className="stat-item">❤️ {likes}</span>
                        <span className="stat-item">👁️ {views}</span>
                    </div>
                    <div className="photographer">📷 {user}</div>
                </div>
            </div>
            <div className="tags-container">
                {tags.split(',').slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag.trim()}</span>
                ))}
                {tags.split(',').length > 3 && (
                    <span className="tag-more">+{tags.split(',').length - 3}</span>
                )}
            </div>
        </div>
    );
};

export default ImageCard;