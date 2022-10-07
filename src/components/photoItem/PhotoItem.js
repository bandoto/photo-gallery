import { Link } from 'react-router-dom'

const PhotoItem = ({ photo, addToFavorites, removeFromFavorites, favoritesChecker }) => {
    
    return (
        <div key={photo.id} className="photo__item item-photo">
            <Link to={`/${photo.id}`}>
                <div className="item-photo__img">
                    <img src={photo.download_url} alt="" />
                </div>
                <div className="item-photo__author">Author: {photo.author}</div>
            </Link>
            {
                favoritesChecker(photo.id) ? 
                    <button className="item-photo__like" onClick={() => removeFromFavorites(photo)}>
                        Remove from favorite
                    </button> 
                        : 
                    <button className="item-photo__like" onClick={() => addToFavorites(photo)}>
                        Add to favorite
                    </button>
            }
        </div>
    );
};

export default PhotoItem;