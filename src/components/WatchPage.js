import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_COMMENTS } from "../utils/constants";
import VideoCardWatchPage from "./VideoCardWatchPage";
import VideoCard from "./VideoCard";
import Comment from "./Comment";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);

    const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

    const getVideos = async () => {
        const tdata = await fetch(YOUTUBE_VIDEOS_API(6));
        const jsonData = await tdata.json();

        setData(jsonData.items);
    };

    const getVideoComments = async () => {
        const tComments = await fetch(YOUTUBE_VIDEO_COMMENTS(params.get("v")));
        const json = await tComments.json();

        console.log(json.items);

        setComments(json.items);
    };

    useEffect(() => {
        dispatch(closeMenu());
        getVideos();
        getVideoComments();
    }, []);

    return (
        <div className="col-span-11 flex">
            <div>
                <iframe
                    className="ml-12 mt-12"
                    width="1200"
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
                            if (idx < 7)
                                return <Comment snippet={snippet} idx={idx} />;
                        })}
                    </ul>
                </div>
            </div>
            <div>
                {data.map((item) => {
                    if (isMenuOpen) {
                        return <VideoCard key={item.id} info={item} />;
                    } else {
                        return <VideoCardWatchPage key={item.id} info={item} />;
                    }
                })}
            </div>
        </div>
    );
};

export default WatchPage;
