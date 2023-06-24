import React from "react";

const LiveChatMessage = (props) => {
    return (
        <div className="flex items-center p-2">
            <img
                className="h-9 rounded-full"
                alt="user-icon"
                src={props.img}
            />
            <div className="font-bold mx-3">{props.name}</div>
            <div>{props.message} 🚀</div>
        </div>
    );
};

export default LiveChatMessage;
