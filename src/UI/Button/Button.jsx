import React from 'react';
import './Button.css'

const Button = ({children, type, onClick}) => {
    return (
        <button className='button' onClick={onClick} type={type}>{children}</button>
    );
};

export default Button;