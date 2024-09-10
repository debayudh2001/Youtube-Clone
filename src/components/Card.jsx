import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='relative'>
            <Link to={`/watch/${data.videoId}`}><img src={data.videoThumbnail} alt='Thumbnail' className='rounded-2xl w-[420px] h-[225px]'/></Link>
            <span className='text-white text-sm absolute bottom-2 right-[10px] bg-[#0F0F0F] px-2 py-0.5 rounded-md'>{data.videoDuration}</span>
        </div>
        <div className='flex gap-4 w-[85%]'>
          <div className='min-w-fit'><img src={data.channelInfo.image} className='w-9 h-9 rounded-full'/></div>
          <div className='flex flex-col'>
            <span className='text-white line-clamp-2'>{data.videoTitle}</span>
            <span className='text-sm text-[#AAAAAA]'>{data.channelInfo.name}</span>
            <span className='text-sm text-[#AAAAAA]'>{data.videoViews} . {data.videoAge}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;







