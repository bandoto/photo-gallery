import { Link } from 'react-router-dom'
import { FcLike, FcDislike } from 'react-icons/fc'

const PhotoItem = ({ photo, onToggleLike }) => {
    
    return (
        <div key={photo.id} className="photo__item item-photo">
            <Link to={`/${photo.id}`}>
                <div className="item-photo__img">
                    <img src={photo.download_url} alt="" />
                </div>
                <div className="item-photo__author">Author: {photo.author}</div>
            </Link>
            <div className="item-photo__like" onClick={() => onToggleLike(photo)}>
                <FcLike size={32} />
            </div>
        </div>
    );
};

export default PhotoItem;