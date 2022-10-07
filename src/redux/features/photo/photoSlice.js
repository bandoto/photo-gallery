import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const items = localStorage.getItem("LIKED_PHOTOS") !== null ? JSON.parse(localStorage.getItem('LIKED_PHOTOS')) : []

const initialState = {
    photos: [],
    likes: items,
    photo: '',
    loading: false
}

export const getAllPhotos = createAsyncThunk(
    'photo/getAllPhotos',
    async ({ limit, page }) => {
        try {
            const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const getSinglePhoto = createAsyncThunk(
    'photo/getSinglePhoto',
    async (params) => {
        try {
            const { data } = await axios.get(`https://picsum.photos/id/${params}/info`)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        likesPhotos: (state, action) => {
            state.likes.push(action.payload)

            localStorage.setItem("LIKED_PHOTOS", JSON.stringify(state.likes.map(item => item)))
        },
        dislikesPhotos: (state, action) => {
            state.likes = state.likes.filter(item => item.id !== action.payload.id)

            localStorage.setItem("LIKED_PHOTOS", JSON.stringify(state.likes.map(item => item)))
        }
    },
    extraReducers: {
        [getAllPhotos.pending]: (state) => {
            state.loading = true
        },
        [getAllPhotos.fulfilled]: (state, action) => {
            state.loading = false
            state.photos = action.payload
        },
        [getAllPhotos.rejected]: (state) => {
            state.loading = false
        },
        [getSinglePhoto.pending]: (state) => {
            state.loading = true
        },
        [getSinglePhoto.fulfilled]: (state, action) => {
            state.loading = false
            state.photo = action.payload
        },
        [getSinglePhoto.rejected]: (state) => {
            state.loading = false
        }
    }
})

const { actions, reducer } = photoSlice

export default reducer
export const {
    likesPhotos,
    dislikesPhotos
} = actions