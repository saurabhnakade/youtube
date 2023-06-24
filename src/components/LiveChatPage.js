import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeMessage } from "../utils/helper";

const LiveChatPage = () => {
    const dispatch=useDispatch();
    const [msg,setMsg]=useState("");

    const messages=useSelector(store=>store.chat.messages);

    useEffect(()=>{
        // API Polling
        const i=setInterval(()=>{
            dispatch(addMessage({
                name:generate(),
                message:makeMessage(20)
            }))
        },1000);

        return ()=>clearInterval(i);
    },[]);

    const messageAdderHelper=(e)=>{
        e.preventDefault();

        dispatch(addMessage({
            name:'Saurabh',
            message:msg
        }))

        setMsg("");
    }

    return (
        <div className="col-span-11 flex flex-col items-center justify-center">
            <div className="h-[46rem] w-[40rem] bg-gray-200 mt-6 border border-gray-500 rounded-lg p-5 overflow-y-scroll flex flex-col flex-col-reverse">
                {messages.map((msg,idx)=><LiveChatMessage key={idx*Math.random()*7} name={msg.name} message={msg.message}/>)}
            </div>
            <div>
            <form onSubmit={messageAdderHelper}>
                <input placeHolder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} className="ml-2 p-2 mt-3 w-[35rem] border border-black" type="text"/>
            <button type="submit" className="bg-gray-300 p-2 ml-2">Add</button>
            </form>
            </div>
            
        </div>
    );
};

export default LiveChatPage;
