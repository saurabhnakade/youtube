import React from "react";

const LiveChatMessage = (props) => {
    return (
        <div className="flex items-center">
            <img
                className="h-10 border border-gray-600 rounded-full"
                alt="user-icon"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="font-bold mx-3">{props.name}</div>
            <div>{props.message} 🚀</div>
        </div>
    );
};

export default LiveChatMessage;
