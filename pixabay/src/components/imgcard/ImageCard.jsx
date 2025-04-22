import React from 'react';
import "./imgcard.css";
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';
const ImageCard = ({ image }) => {

    const { modalDispatch } = useModal();
const navigate = useNavigate();
    if (!image) return null;


    const { largeImageURL, tags, user, likes, views } = image;

    const handleModalClick = () => {
        const token = localStorage.getItem("token");

        if(!token || token=="undefined"){
            navigate("/login");
            return; 
        }else{
            modalDispatch({
                type: "OPEN_MODAL_WITH_IMAGE",
                payload: image
            });
        }
    };

    return (
        <div className="image-card" onClick={handleModalClick}>
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
                {tags.split(',').slice(0, 6).map((tag, index) => (
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