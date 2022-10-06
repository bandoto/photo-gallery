import { useEffect, useState } from 'react';

import PhotoItem from '../../components/photoItem/PhotoItem';

const LikesPage = () => {

    const [likedPhotos, setLikedPhotos] = useState([])

    useEffect(() => {
        const data = window.localStorage.getItem('liked')
        setLikedPhotos(Object(JSON.parse(data)))
    }, [])

    const renderPhotos = (arr) => {
        const photos = arr?.map(photo => {
            return (
                <PhotoItem 
                    key={photo.id}
                    photo={photo}
                    onToggleLike={onToggleLike}
                />
            )
        })

        return (
            <div className="photo__body">
                {photos}   
            </div>
        )
    }

    const onToggleLike = (photo) => {
        setLikedPhotos(likedPhotos.filter(item => item.id !== photo.id))
        const local = JSON.parse(window.localStorage.getItem('liked'))
        const elem = local.findIndex(item => item.id === photo.id)
        local.splice(elem, 1)
        window.localStorage.setItem('liked', JSON.stringify(local))
    }

    const content = renderPhotos(likedPhotos)

    return (
        <section className="photo">
            <div className="container">
                {likedPhotos ? content : <span>no liked photos</span>}
            </div>
        </section>
    );
};

export default LikesPage;