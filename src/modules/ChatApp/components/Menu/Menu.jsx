import React from 'react';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../../../utils/consts';
import './Menu.css'

const Menu = ({setShowMenu}) => {
    return (
        <div className='Menu'>
            <i onClick={() => setShowMenu(false)} class='bx bxs-grid menu-burger'></i>
            <ul>
                <li><NavLink to={CHAT_ROUTE + '/0'}>Чат</NavLink></li>
                <li><NavLink to={LOGIN_ROUTE}>Зарегистрироваться</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;