import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from './VideoCard';
import VideoContainerShimmer from './VideoContainerShimmer';

const VideoContainer = () => {
  const [data,setData]=useState([]);

  const getVideos=async()=>{
    const tdata=await fetch(YOUTUBE_VIDEOS_API(50));
    const jsonData= await tdata.json();

    setData(jsonData.items);
  }

  useEffect(()=>{
    getVideos();
  },[])

  if(data.length===0){
    return <VideoContainerShimmer/>
  }

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data.map((item)=>
      <VideoCard key={item.id} info={item}/>
      )}
    </div>
  )
}

export default VideoContainer