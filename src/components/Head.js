import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import {  YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { cacheAdd } from "../utils/cacheSeachSlice";

const Head = () => {
    const dispatch = useDispatch();
    const cache=useSelector(store=>store.cache)

    const [searchQuery,setSearchQuery]=useState("");
    const [searchResults,setSearchResults]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);

    const getSearchSuggestions=async()=>{
        const data =await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
        const json =await data.json();
        setSearchResults(json[1]);

        dispatch(cacheAdd({
            [searchQuery]:json[1]
        }))
    }
   
    useEffect(()=>{
        // make an api call after every keyPress
        // but if the difference between two api calls is <200ms - decline the api call
        const timer=setTimeout(()=>{
            if(cache[searchQuery]){
                setSearchResults(cache[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        },200)

        // every time component unmounts this gets called
        return ()=>{
            clearTimeout(timer);
        }

    },[searchQuery]);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-1 m-1 shadow-lg">
            <div className="flex col-span-1 justify-around items-center">
                <img
                    onClick={toggleMenuHandler}
                    className="h-10 cursor-pointer"
                    alt="menu"
                    src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
                />
                <Link to={"/"}>
                <img
                    className="h-16"
                    alt="yotube-logo"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                />
                </Link>
            </div>
            <div className="col-span-10 pl-44 relative">
                <div className="flex items-center w-full mt-3">
                    <input
                        className="w-1/2 p-2 pl-6 border border-gray-400 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                    />
                    <Link to={"/results?search_query="+searchQuery}>
                        <button className="border border-gray-400 p-2 rounded-r-full">
                            Search
                        </button>
                    </Link>
                </div>
                {showSuggestions && searchResults.length!==0 && <div className="absolute z-10 bg-white mt-1 py-2 px-5 w-[40rem] rounded-lg drop-shadow-2xl">
                    <ul className="">
                        {searchResults.map((item,idx)=><li onMouseDown={()=>setSearchQuery(item)} className="py-2 px-2 hover:bg-gray-100" key={idx}>
                        🔍 {item}
                        </li>)}
                    </ul>
                </div>}
            </div>
            
            <div className="col-span-1 flex items-center">
                <img
                    className="h-10 border border-gray-600 rounded-full"
                    alt="user-icon"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div>
    );
};

export default Head;
