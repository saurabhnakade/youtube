import React from 'react';


const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


const VideoCardShimmer = () => {
  return (
      <div className="overflow-hidden h-66 p-2 m-2 w-80 shadow-lg">
        <div className="animate-pulse">
          <div className="h-60 bg-gray-200 rounded-lg"></div>
          <ul className="mt-4 space-y-2">
            <li className="h-4 bg-gray-200 rounded w-3/4"></li>
            <li className="h-4 bg-gray-200 rounded"></li>
            <li className="h-4 bg-gray-200 rounded w-2/3"></li>
          </ul>
        </div>
      </div>
  );
};

const VideoContainerShimmer=()=>{
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data.map((item)=>
      <VideoCardShimmer key={item}/>
      )}
    </div>
  )
}


export default VideoContainerShimmer;
