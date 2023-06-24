import React from "react";
import { Link } from "react-router-dom";

const VideoCardWatchPage = ({ info }) => {
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <Link to={"/watch?v=" + info.id.videoId}>
            <div className="overflow-hidden h-66 p-2 m-2 mr-10 shadow-lg flex">
                <img
                    alt="thumbnail"
                    className="h-40 rounded-lg"
                    src={thumbnails?.high?.url}
                />
                <div className="ml-4 w-72">
                    <ul>
                        <li className="font-bold py-2">{title.length<40?title:title.substring(0,60)+"..."}</li>
                        <li>{channelTitle}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default VideoCardWatchPage;
