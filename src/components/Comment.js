import React from "react";

const Comment = ({ snippet }) => {
    return (
        <li className="px-3 py-5 bg-gray-300 my-8 mx-3 rounded-xl">
            <div className="flex items-center">
                <img
                    className="h-6 mr-2 border border-gray-600 rounded-full"
                    alt="user-img"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                <div className="font-bold text-lg">
                    {snippet.topLevelComment.snippet.authorDisplayName}
                </div>
            </div>
            <div className="text-md ml-8">
                {snippet.topLevelComment.snippet.textOriginal}
            </div>
        </li>
    );
};

export default Comment;
