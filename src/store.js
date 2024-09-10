import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from './features/youtube/youtubeSlice'

export default configureStore({
    reducer: {
        youtubeApp: youtubeReducer,
    },
})


