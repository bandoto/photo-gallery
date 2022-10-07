import { getAllPhotos } from '../../redux/features/photo/photoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { likesPhotos, dislikesPhotos } from '../../redux/features/photo/photoSlice'

import Spinner from '../spinner/Spinner'
import PhotoItem from '../photoItem/PhotoItem'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'

import './photoList.scss'

const PhotoList = () => {

    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const { photos } = useSelector(state => state.photo)
    const { loading } = useSelector(state => state.photo)
    const { likes } = useSelector(state => state.photo)

    useEffect(() => {
        dispatch(getAllPhotos({ limit, page }))
    }, [dispatch, limit, page])

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

    const addToFavorites = (photo) => {
        dispatch(likesPhotos(photo))
    }

    const removeFromFavorites = (photo) => {
        dispatch(dislikesPhotos(photo))
    }

    const favoritesChecker = (id) => {
        const boolean = likes.some(photo => photo.id === id)
        return boolean
    }

    const onChangePage = (pageValue) => {
        if (pageValue < 1) {
            setPage(1)
        } else {
            setPage(pageValue)
        }
    }

    const isLoading = loading ? <Spinner /> : null
    const content = renderPhotos(photos)

    return (
        <section className="photo">
            <div className="container">
                <div className="photo__perpage">
                    <span>Photos per page:</span>
                    <select onChange={e => setLimit(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                    </select>
                </div>
                {isLoading}
                {content}
                <div className="photo__pagination">
                    <GrPrevious 
                        size={50} 
                        onClick={() => onChangePage(page - 1)}
                        style={page === 1 ? {'opacity': 0, 'visibility': 'hidden'} : ''} 
                    />
                    <span>{page}</span>
                    <GrNext 
                        size={50} 
                        onClick={() => onChangePage(page + 1)}
                    />
                </div>
            </div>
        </section>
    );
};

export default PhotoList;