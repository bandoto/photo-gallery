import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getSinglePhoto } from "../../redux/features/photo/photoSlice"
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../spinner/Spinner'

import './singlePhoto.scss'

const SinglePhoto = () => {

    const dispatch = useDispatch()
    const params = useParams()

    const { photo } = useSelector(state => state.photo)
    const { loading } = useSelector(state => state.photo)

    useEffect(() => {
        dispatch(getSinglePhoto(params.id))
    }, [params.id, dispatch])

    return (
        <div className="single-photo">
            <div className="container">
                <button className="back">
                    <Link to="/">Back</Link>
                </button>
                {
                    loading ? <Spinner /> : 
                    <div className="single-photo__body">
                        <div className="single-photo__item item-photo">
                            <div className="item-photo__img">
                                <img src={photo.download_url} alt="" />
                            </div>
                            <div className="item-photo__author">{photo.author}</div>
                            <a 
                                href={photo.download_url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="item-photo__link">Open in new tab</a>
                        </div>
                    </div>
                }   
            </div>
        </div>
    );
};

export default SinglePhoto;