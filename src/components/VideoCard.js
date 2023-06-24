import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet

  return (
    <Link to={"/watch?v="+info.id}>
    <div className='overflow-hidden h-[26rem] p-2 m-2 w-80 shadow-lg'>
        <img alt="thumbnail" className='object-cover rounded-lg' src={thumbnails?.high?.url}/>
        <ul>
          <li className='font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount}</li>
        </ul>
    </div>
    </Link>
  )
}

export default VideoCard