import React from "react";
import { Link } from "react-router-dom";

const VideoCardSearchPage = ({ info }) => {
    const { channelTitle, description, thumbnails, title } = info.snippet;

    return (
        <Link to={"/watch?v="+info.id.videoId}>
            <div className="flex">
                <div className="h-45 m-5 shadow-lg">
                    <img
                        alt="thumbnail"
                        className="object-cover h-[280px] w-[540px] rounded-lg"
                        src={thumbnails?.high?.url}
                    />
                </div>
                <div className="m-5 w-[60rem]"> 
                    <ul>
                        <li className="text-2xl font-bold py-2">{title}</li>
                        <li className="mb-4 text-lg">{channelTitle}</li>
                        <li className="text-sm text-gray-600">{description}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default VideoCardSearchPage;
