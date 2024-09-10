import React from "react";
import { MdHomeFilled, MdSubscriptions, MdHistory, MdPlaylistPlay, MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { BiSolidLike } from "react-icons/bi";
import { PiGreaterThanBold } from "react-icons/pi";


const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-2xl font-bold" />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className="text-2xl font-bold" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-2xl font-bold" />,
      name: "Subscriptions",
    },
  ];
  const otherLinks1 = [
    {
        icon: <IoIosContact className="text-2xl font-bold" />,
        name: "Your Channel",
    },
    {
        icon: <MdHistory className="text-2xl font-bold" />,
        name: "History",
    },
    {
        icon: <MdPlaylistPlay className="text-2xl font-bold" />,
        name: "Playlists",
    },
    {
        icon: <GoVideo className="text-2xl font-bold" />,
        name: "Your videos",
    },
    {
        icon: <MdOutlineWatchLater className="text-2xl font-bold" />,
        name: "Watch later",
    },
    {
        icon: <BiSolidLike className="text-2xl font-bold" />,
        name: "Liked videos",
    },
  ];

  return (
    <>
      <div className="w-[15%] bg-[#0F0F0F] min-h-[91.2vh] pt-2 flex flex-col gap-3 ">
        <ul className="flex flex-col gap-3 px-4 pb-6 border-b-[1px] border-slate-700">
          {mainLinks.map((item) => {
            return (
              <li
                key={item.name}
                className="text-white hover:bg-[#3d3d3d] p-2 rounded-lg"
              >
                <a href='#' className="flex items-center gap-6">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-3 px-4 pb-6 border-b-[1px] border-slate-700">
          <span className="text-white flex items-center gap-2 pl-[9px]">You <PiGreaterThanBold className="text-xs" /></span>
          {otherLinks1.map((item) => {
            return (
              <li
                key={item.name}
                className="text-white hover:bg-[#3d3d3d] p-2 rounded-lg"
              >
                <a href="#" className="flex items-center gap-6">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
