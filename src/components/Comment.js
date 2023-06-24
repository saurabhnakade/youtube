import React from "react";

const Comment = ({ snippet }) => {
    return (
        <li className="px-3 py-5 bg-gray-300 my-8 mx-3 rounded-xl">
            <div className="flex items-center">
                <img
                    className="h-12 mr-2 rounded-full"
                    alt="user-img"
                    src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                />
                <div className="font-bold text-lg ml-2">
                    {snippet.topLevelComment.snippet.authorDisplayName}
                </div>
            </div>
            <div className="text-md ml-14">
                {snippet.topLevelComment.snippet.textOriginal}
            </div>
        </li>
    );
};

export default Comment;
