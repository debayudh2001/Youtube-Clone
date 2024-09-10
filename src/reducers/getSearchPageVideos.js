import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import parseData from '../utils/parseData';

const API_KEY = "AIzaSyCZriG6uwt4Xp8DB-cMW1d3jsEKdC45q1U";

export const getSearchPageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos,searchTerm},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);

        const items = response.data.items;

        const parsedData = await parseData(items);

        return {parsedData: [...videos,...parsedData], nextPageToken: nextPageTokenFromState};

    }
)


