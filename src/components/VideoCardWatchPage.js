import React from "react";
import { Link } from "react-router-dom";

const VideoCardWatchPage = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <Link to={"/watch?v=" + info.id}>
            <div className="overflow-hidden h-66 p-2 m-2 mr-10 shadow-lg flex">
                <img
                    alt="thumbnail"
                    className="h-60 rounded-lg"
                    src={thumbnails?.high?.url}
                />
                <div className="ml-4 w-72">
                    <ul>
                        <li className="font-bold py-2">{title}</li>
                        <li>{channelTitle}</li>
                        <li>{statistics.viewCount}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default VideoCardWatchPage;
