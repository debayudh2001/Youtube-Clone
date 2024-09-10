import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import SearchCard from "../components/SearchCard";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../reducers/getSearchPageVideos";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => {state.youtubeApp.searchTerm});

  useEffect(() => {
    dispatch(clearVideos());
    if(searchTerm === ""){
        navigate("/");
    }else{
        dispatch(getSearchPageVideos(false));
    }
  }, [dispatch,navigate,searchTerm]);

  return (
    <>
      <Navbar />
      <div className="flex bg-[#0F0F0F] gap-16">
        <Sidebar />
        { videos.length ? (
          <div className="w-full">
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            Loader={<Spinner />}
            height={650}
            
          >
            <div className="flex flex-col gap-6 px-4 pt-1">
              {videos.map((item) => {
                return <SearchCard data={item} key={item.videoId} />
              })}
            </div>
          </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )
        }
      </div>
    </>
  );
};

export default Home;
