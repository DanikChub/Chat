import { useRef } from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from 'react';
import { useParams } from "react-router-dom";
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import {observer} from 'mobx-react-lite'
import { createMessage, fetchMessages, deleteMessage, remakeMessage } from '../../../../http/messageAPI';
import {Context} from '../../../../index';

import {fetchChat} from '../../../../http/chatAPI'

import './Chat.css'


const Chat = observer(({width}) => {
    const {user} = useContext(Context);
    const [messages, setMessages] = useState([]);
    const [bodyWidth, setBodyWidth] = useState(0);
    const [src, setSrc] = useState('');
    const [imagePreview, setImagePreview] = useState();
    const [you, setYou] = useState(false);
    const {id} = useParams();

    const [mess, setMess] = useState({id: null, mess: null});

    const chat = useRef(null);

    useEffect(() => {

        setBodyWidth(document.body.getBoundingClientRect().width);
        console.log(bodyWidth);

        fetchMessages(id)
            .then(data => setMessages(data))
            .finally(() => chat.current.scrollTop = 999999999);
        
        
    }, [id])

    useEffect(() => {
        
        chat.current.scrollTop = 999999;

    }, [messages, src])

    
    
    const transformMessages = async (newMessage, file) => {
        
        const formData = new FormData()
        formData.append('img', file ? file.files[0] : '')
        formData.append('message', newMessage || '')
        formData.append('userId', user.user.id)
        formData.append('name', user.user.name)
        formData.append('chat_id', id)

        
        createMessage(formData)
            .then(data => setMessages(messages => [...messages, data]))
            .finally(() => chat.current.scrollTop = 999999999);
        
    }


    const deleteMessages = async (id) => {
        deleteMessage(id).then(data => setMessages(messages => [...messages.filter(message => message.id !== data.data)]));
        
    }

    const remakeMessages = (id, mess) => {
        
        setMess({id: id, mess: mess})
    }

 

    return (
        <>
            
            <div className='chat' style={{width: `${1903 - width}`}}>
                
                <div className="chat__body" ref={chat}>
                    {id == 0 && 'Нажмите на чат, чтобы начать общение'}
                    <Messages messages={messages} deleteMessages={deleteMessages} remakeMessages={remakeMessages}/>
                    
                </div>
                <img src={imagePreview} alt="" className="chatImg"/>
                {
                    id != 0 && 
                    <div className="fullInput">
                        
                        
                        <Input 
                            setSrc={setSrc} 
                            src={src} 
                            setMessages={transformMessages}  
                            setImagePreview={setImagePreview}
                        />
                    </div>
                }
                
                
                
                
            </div>
        </>
        
    );
});

export default Chat;