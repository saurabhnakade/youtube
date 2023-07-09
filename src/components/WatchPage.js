import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_RELATED_VIDEOS_TO_VIDEO_ID, YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_COMMENTS } from "../utils/constants";
import VideoCardWatchPage from "./VideoCardWatchPage";
import VideoCard from "./VideoCard";
import Comment from "./Comment";
import LiveChatPage from "./LiveChatPage";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);

    const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

    const getVideos = async () => {
        const tdata = await fetch(YOUTUBE_RELATED_VIDEOS_TO_VIDEO_ID(params.get("v")));
        const jsonData = await tdata.json();

        setData(jsonData.items);
    };

    const getVideoComments = async () => {
        const tComments = await fetch(YOUTUBE_VIDEO_COMMENTS(params.get("v")));
        const json = await tComments.json();

        setComments(json.items);
    };

    useEffect(() => {
        dispatch(closeMenu());
        getVideos();
        getVideoComments();
    }, [params]);

    return (
        <div className="col-span-11 flex">
            <div className="w-[74rem]">
                <iframe
                    className="ml-12 mt-12"
                    width="1100"
                    height="600"
                    src={
                        "https://www.youtube.com/embed/" +
                        params.get("v") +
                        "?autoplay=1"
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div>
                    <ul className="ml-12 mt-14">
                        {comments.map(({ snippet }, idx) => {
                                return <Comment snippet={snippet} key={idx*Math.random()} />;
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <LiveChatPage t={data}/>
                </div>
                <div>
                    {data.map((item) => {
                        if (isMenuOpen) {
                            return <VideoCard key={Math.random()} info={item} />;
                        } else {
                            return <VideoCardWatchPage key={Math.random()} info={item} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
