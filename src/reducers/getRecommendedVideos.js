import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import parseRecommendedData from '../utils/parseRecommendedData';

const API_KEY = "AIzaSyCZriG6uwt4Xp8DB-cMW1d3jsEKdC45q1U";

const getRecommendedVideos = createAsyncThunk(
    "youtube/App/RecommendedVideos",
    async(videoId,{getState}) => {
        const {
            youtubeApp : {currentPlaying : {channelInfo : {id : channelId}}},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=videoId=${videoId}`);

        const items = response.data.items;

        const parsedData = await parseRecommendedData(items,videoId);

        return {parsedData};

    }
)


export default getRecommendedVideos;