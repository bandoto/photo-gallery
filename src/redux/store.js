import { configureStore } from '@reduxjs/toolkit'
import photoSlice from './features/photo/photoSlice'

export const store = configureStore({
    reducer: {
        photo: photoSlice
    }
})