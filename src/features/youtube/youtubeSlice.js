import { createSlice } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../../reducers/getHomePageVideos'
import { getSearchPageVideos } from '../../reducers/getSearchPageVideos' 
import getRecommendedVideos from '../../reducers/getRecommendedVideos'
import getVideoDetails from '../../reducers/getVideoDetails'


const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
}

export const youtubeSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state,action) => {
            state.searchTerm = action.payload;
        },
        clearSearch: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action) => {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action) => {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getRecommendedVideos.fulfilled,(state,action) => {
            if(action.payload && action.payload.parsedData){
                state.recommendedVideos = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled,(state,action) => {
            state.currentPlaying = action.payload;
        })
    }
})

export const { clearVideos,changeSearchTerm,clearSearch } = youtubeSlice.actions;
export default youtubeSlice.reducer;


