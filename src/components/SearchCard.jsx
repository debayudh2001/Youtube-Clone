import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = ({data}) => {
  return (
    <>
      <div className='flex gap-5'>
        <div className='relative'>
            <Link to={`/watch/${data.videoId}`}><img src={data.videoThumbnail} alt='Thumbnail' className='rounded-2xl w-[500px] h-[280px]'/></Link>
            <span className='text-white text-sm absolute bottom-3 right-3 bg-[#0F0F0F] px-2 py-0.5 rounded-md'>{data.videoDuration}</span>
        </div>
        <div className='flex flex-col gap-3 pt-2'>
            <span className='text-white text-lg'>{data.videoTitle}</span>
            <span className='text-xs text-[#AAAAAA]'>{data.videoViews} . {data.videoAge}</span>
            <div className='flex gap-2 items-center'>
                <div className='min-w-fit'><img src={data.channelInfo.image} className='w-6 h-6 rounded-full'/></div>
                <span className='text-sm text-[#AAAAAA]'>{data.channelInfo.name}</span>
            </div>
            <span className='text-xs text-[#AAAAAA]'>{data.videoDescription}</span>
        </div>
      </div>
    </>
  )
}

export default SearchCard



