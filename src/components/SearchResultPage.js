import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_RESULTS } from '../utils/constants';
import VideoCardSearchPage from './VideoCardSearchPage';
import { useSearchParams } from 'react-router-dom';

const SearchResultPage = () => {
    const dispatch=useDispatch();
    const isMenuOpen=useSelector(store=>store.nav.isMenuOpen);

    const [params,setParams]=useSearchParams();

    const [videos,setVideos]=useState([]);

    const getSearchVideoResults=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS(params.get("search_query")))
        const json=await data.json();
        setVideos(json.items)
    }

    useEffect(() => {
        dispatch(closeMenu());
        getSearchVideoResults();
    }, [params]);

    let tClass="col-span-11";
    if(!isMenuOpen){
        tClass+=" ml-24"
    }else{
        tClass+=" ml-10";
    }

  return (
    <div className={tClass}>
        {videos.map((item)=><VideoCardSearchPage key={item.id.videoId} info={item}/>)}
    </div>
  )
}

export default SearchResultPage