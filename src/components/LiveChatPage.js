import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/generateName";
import { generateMessage } from "../utils/generateMessage";
import { generateProfileImage } from "../utils/generateProfileImages";
import { useParams } from "react-router-dom";

const LiveChatPage = ({t}) => {
    const dispatch=useDispatch();
    const [msg,setMsg]=useState("");

    const {id}=useParams();

    const messages=useSelector(store=>store.chat.messages);
    const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

    useEffect(()=>{
        // API Polling
        const i=setInterval(()=>{
            dispatch(addMessage({
                name:generate(),
                message:generateMessage(),
                img:generateProfileImage()
            }))
        },1000);

        return ()=>clearInterval(i);
    },[]);

    const messageAdderHelper=(e)=>{
        e.preventDefault();

        if(msg==="")return;

        dispatch(addMessage({
            name:'Saurabh',
            message:msg,
            img:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        }))

        setMsg("");
    }

    if(isMenuOpen && id!="2")return <></>
    let temp="";
    if(id)temp=" col-span-11"

    return (
        <div className={"flex flex-col items-center justify-center"+temp}>
            <div className="h-[42rem] w-[28rem] bg-gray-200 mt-6 border border-gray-500 rounded-lg p-5 overflow-y-scroll flex flex-col flex-col-reverse">
                {messages.map((msg,idx)=><LiveChatMessage key={idx*Math.random()*7} name={msg.name} message={msg.message} img={msg.img}/>)}
            </div>
            <div>
            <form onSubmit={messageAdderHelper}>
                <input placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} className="ml-2 p-2 mt-3 w-[24rem] border border-black focus:outline-none" type="text"/>
            <button type="submit" className="bg-gray-300 p-2 ml-2">Add</button>
            </form>
            </div>
            
        </div>
    );
};

export default LiveChatPage;
