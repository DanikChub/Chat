import React, {useContext} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllUsers } from '../../../../http/userAPI';
import { createChat } from '../../../../http/chatAPI';
import { Context } from '../../../../index';
import './ChatInfo.css'

const ChatInfo = () => {

    const [users, setUsers] = useState([]);
    const {user} = useContext(Context);

    useEffect(() => {
        getAllUsers().then(data => setUsers(data))
        users.forEach(el => console.log(el));
    }, [])

    const handleClick = (name, id) => {
        createChat(name, [id, user.user.id])
    }

    return (
        <div className='ChatInfo'>
            <ul>
                {
                    users.map(user => (
                        <li onClick={() => handleClick(user.name, user.id)} className='ChatUser'>{user.name}</li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ChatInfo;