import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { useLocation,useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearSearch, clearVideos } from "../features/youtube/youtubeSlice"
import { getSearchPageVideos } from "../reducers/getSearchPageVideos";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if(location.pathname !== "/search"){
      navigate("/search");
    }else{
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  }

  return (
    <>
      <div className="flex justify-between items-center bg-[#0F0F0F] px-6 h-16 pb-2">
        <div className="flex items-center gap-6">
          <div className="text-2xl text-white font-bold">
            <GiHamburgerMenu />
          </div>
          <div className="flex gap-2 items-center">
            <FaYoutube className="text-red-600 text-3xl font-bold" />
            <span className="text-white text-xl">Youtube</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <form onSubmit={(e)=>{
            e.preventDefault();
            handleSearch();
          }}>
            <div className="flex gap-3 items-center pr-4 border-[1px] border-slate-700 rounded-l-3xl rounded-r-3xl bg-[#222222]">
              <input
                type="text"
                placeholder="Search.."
                className="bg-[#121212] p-2 focus:outline-none text-white px-4 rounded-l-3xl w-[620px]"
                value={searchTerm}
                onChange={(e) => {dispatch(changeSearchTerm(e.target.value))}}
              />
              <button className="text-white text-2xl font-bold">
                <CiSearch />
              </button>
            </div>
          </form>
          <div className="text-white font-bold rounded-full bg-[#3D3D3D] p-3">
            <FaMicrophone />
          </div>
        </div>
        <div className="text-white font-bold text-2xl flex items-center gap-8">
          <RiVideoAddLine />
          <div className="relative">
            <IoNotifications />
            <span className="text-xs font-bold absolute bottom-4 left-3 bg-red-600 rounded-xl px-1">
              9+
            </span>
          </div>
          <img
            id="img"
            draggable="false"
            alt="Avatar image"
            className="h-8 w-8 rounded-full"
            src="https://yt3.ggpht.com/yti/ANjgQV-j2J0P4o0XnZBKl7ASAeGSNv0VROwiPJG9RNJU_OojV4U=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
