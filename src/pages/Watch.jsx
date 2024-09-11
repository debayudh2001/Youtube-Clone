import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import Navbar from '../components/Navbar';
import getVideoDetails from '../reducers/getVideoDetails';
import getRecommendedVideos from '../reducers/getRecommendedVideos';


const Watch = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector((state) => state.youtubeApp.currentPlaying);
  console.log(currentPlaying);
  const recommendedVideo = useAppSelector((state) => state.youtubeApp.recommendedVideos);

  useEffect(() => {
    if(id){
        dispatch(getVideoDetails(id));
    }else{
        navigate("/");
    }
  },[id,navigate,dispatch]);

  useEffect(() => {
    if(currentPlaying && id){
        dispatch(getRecommendedVideos(id));
    }
  },[currentPlaying,dispatch,id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className='bg-[#0F0F0F] w-screen h-screen'>
          <Navbar />
          <div className='pl-28 pt-2'>
            <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              frameBorder="0"
              width="800"
              height="502"
              allowFullScreen
              title="Youtube Player"
              className='rounded-3xl'>
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Watch




