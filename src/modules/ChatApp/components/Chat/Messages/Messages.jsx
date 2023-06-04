import React, { useRef } from 'react';
import { useState } from 'react';

import {Context} from '../../../../../index'

import './Messages.css'
import { useContext } from 'react';


const Messages = ({messages, deleteMessages, remakeMessages}) => {
    const {user} = useContext(Context);
    const [menuShow, setMenuShow] = useState(false);
    const [menuX, setMenuX] = useState(0);
    const [menuY, setMenuY] = useState(0);
    const [id, setID] = useState();
    const [mess, setMess] = useState();
    const [prevId, setPrevID] = useState();
    const messagesRef = useRef(null);
    
    
    const handleContextMenu = (e, id, message) => {
        
       console.log(prevId, id)
        if (!menuShow && prevId != id) {
            e.preventDefault();
        
            let x = e.clientX - messagesRef.current.getBoundingClientRect().left;
            let y = e.clientY - messagesRef.current.getBoundingClientRect().top;
            setMenuX(x);
            setMenuY(y);
            setMenuShow(!menuShow);
            setID(id);
            setPrevID(id);
            setMess(message);
        } else {
            setMenuShow(false);
            setPrevID(null);
            
        }
        
        
        
    }

    const handleDelete = () => {
        deleteMessages(id);
        setMenuShow(false);
        
    }

    const handleRemake = () => {
        remakeMessages(id, mess);
        setMenuShow(false);
    }

    const converterDate = (date) => {
        var timeMs = Date.parse(date);
        var date = new Date();
        date.setTime(timeMs);
        var options = {hour: "numeric", minute: "numeric",};
        let createdAt = new Intl.DateTimeFormat('ru-GB', options).format(date);
        
        return createdAt;
    }

    return (
        <div className='messages'ref={messagesRef}>
            {messages.map(el => (
               
                <div 
                    key={el.id} 
                    className={`message ${el.userId === user.user.id? 'you__message' : ''}`}
                    onContextMenu={(e) => handleContextMenu(e, el.id, el.message)}
                >
                    {el.img && !el.message? <img src={process.env.REACT_APP_API_URL + el.img} className='messageImg' alt="" />:''}
                    {el.message && !el.img ?
                        <span>
                            <span className='time'>{el.name} </span>
                            <span className='mess'>{el.message} </span>
                            <span className='time'>{converterDate(el.updatedAt)}</span>
                        </span>
                        :''
                    }
                    {el.message && el.img ?
                        <span>
                            
                            <img src={process.env.REACT_APP_API_URL + el.img} className='messageImg' alt="" />
                            
                            <span className='time'>{el.name} </span>
                            <span className='mess'>{el.message} </span>
                            <span className='time'>{converterDate(el.updatedAt)}</span>
                                
                        </span>
                        :''
                    }
                    
                    
                </div> 
            ))}

            <div className="contextMenu" style={{display: menuShow? 'block' : 'none', left: menuX, top: menuY, position: 'absolute'}}>
                <button onClick={handleDelete}>Удалить</button>
                <button onClick={handleRemake}>Изменить</button>
            </div>
        </div>
    );
};

export default Messages;