import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { CHAT_ROUTE } from '../../../../utils/consts';

import {fetchChats} from '../../../../http/chatAPI'

import './Channels.css'
import { observer } from 'mobx-react-lite';

const Channels = observer(({width, setBrMouseDown}) => {
    const [channels, setChennels] = useState([]);

    useEffect(() => {
        fetchChats().then(data => setChennels(data));
        
    }, [])
    
    return (
        <div className='channels'  style={{width: `${width}px`}}>
            {channels.map(channel => (
                
                <Link to={`${CHAT_ROUTE}/${channel.id}`} key={Math.random()}>
                    <div className={`channel ${channel.active? 'active' : ''}`}>{channel.name}</div>
                </Link>
            ))}
            <div 
                onMouseDown={() => setBrMouseDown(true)}
                className="br"
            ></div>
        </div>
    );
});

export default Channels;