import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideos } from "../reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex bg-[#0F0F0F] gap-16">
        <Sidebar />
        { videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            Loader={<Spinner />}
            height={650}
            
          >
            <div className="grid gap-y-9 gap-x-8 grid-cols-3 px-8 pt-1">
              {videos.map((item) => {
                return <Card data={item} key={item.videoId} />
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )
        }
      </div>
    </>
  );
};

export default Home;
