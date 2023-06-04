import React from 'react';
import { NavLink } from 'react-router-dom';


import {CHAT_ROUTE, ERRORPAGE_ROUTE, LOGIN_ROUTE} from '../../utils/consts'

import './NavPanel.css'

const NavPanel = ({setShowMenu}) => {

    return (
        <div className='navPanel'>
            <i onClick={() => setShowMenu(true)} class='bx bxs-grid nav-burger'></i>
            
        </div>
        
        
    );
};

export default NavPanel;