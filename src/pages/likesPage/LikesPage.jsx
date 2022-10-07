import { useDispatch, useSelector } from 'react-redux'
import { likesPhotos, dislikesPhotos } from '../../redux/features/photo/photoSlice'

import Spinner from '../../components/spinner/Spinner';
import PhotoItem from '../../components/photoItem/PhotoItem';

const LikesPage = () => {

    const { likes } = useSelector(state => state.photo)
    const { loading } = useSelector(state => state.photo)

    const dispatch = useDispatch()

    const renderPhotos = (arr) => {
        const photos = arr?.map(photo => {
            return (
                <PhotoItem 
                    key={photo.id}
                    photo={photo}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    favoritesChecker={favoritesChecker}
                />
            )
        })

        return (
            <div className="photo__body">
                {photos}   
            </div>
        )
    }

    const favoritesChecker = (id) => {
        return likes.some(photo => photo.id === id)
    }

    const addToFavorites = (photo) => {
        dispatch(likesPhotos(photo))
    }

    const removeFromFavorites = (photo) => {
        dispatch(dislikesPhotos(photo))
    }

    const content = renderPhotos(likes)
    const isLoading = loading ? <Spinner /> : null

    return (
        <section className="photo">
            <div className="container">
                {isLoading}
                {likes.length > 0 ? content : <span>You dont have any favourite photos yet</span>}
            </div>
        </section>
    );
};

export default LikesPage;