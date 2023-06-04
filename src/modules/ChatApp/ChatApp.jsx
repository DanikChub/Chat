import Chat from "./components/Chat/Chat";

import Channels from "./components/Channels/Channels"

import './ChatApp.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChatInfo from "./components/ChatInfo/ChatInfo";
import NavPanel from "../NavPanel/NavPanel";
import Menu from "./components/Menu/Menu";

const ChatApp = () => {
    const [width, setWidth] = useState(1900);
    const [brMouseDown, setBrMouseDown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [chatApp, setChatApp] = useState();


    const handleMouseMove = (e) => {
        if (brMouseDown) {    
            let w = e.clientX;
            
            setWidth(w);
        }
    }

    const handleMouseDown = (e) => {
        let chatAppHtml = e.currentTarget;
        setChatApp(chatAppHtml)
    }
 

    return (
        <div 
            className={`ChatApp ${showMenu ? 'dark' : ''}`}
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => setBrMouseDown(false)}
            onMouseUp={() => setBrMouseDown(false)}
        >
            {/* width={width} */}
            <NavPanel setShowMenu={setShowMenu}/>
            {showMenu && <Menu setShowMenu={setShowMenu}/>}
            <Channels setBrMouseDown={setBrMouseDown} />        
            <Chat />
            <ChatInfo/>
        </div>
        
    );
};

export default ChatApp;