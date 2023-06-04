import React, { useState } from 'react';
import { useEffect } from 'react';




import Loader from '../../../../../components/UI/Loader/Loader';

import './Input.css'

const Input = ({setMessages, setSrc, src, setImagePreview}) => {
    
    const [inp, setInp] = useState('');
    
    

    const handleChange = (e) => {
		setInp(e.currentTarget.value);
        
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inp || src) {
            setMessages(inp, src);
            setInp('');
            setSrc('');
            setImagePreview('');

        } 
    
        
        
     
    }


    const handleKeyPress = (e) => {
		// if (e.ctrlKey && e.code === 'Enter') {
		// 	handleSubmit(e);
		// }

        if (e.code === 'Enter') {
			handleSubmit(e);
		}
	
	}

    return (
        <form onSubmit={handleSubmit} className='input'>
            <Loader setSrc={setSrc} setImagePreview={setImagePreview}/>
            <textarea
                value={inp}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className={`input__inner`}
                type="text" 
                placeholder='Сообщение...'
            />
            <i onClick={handleSubmit} className='bx bxs-send' ></i>
        </form>
       
    );
};

export default Input;