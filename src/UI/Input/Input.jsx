import React, { useState, useEffect } from 'react';
import useInput from '../../Hooks/useInput';

import './Input.css'

const Input = ({type, placeholder, setInnerValue, firstValue = ''}) => {
    const [value, setValue] = useState(firstValue);

    useEffect(() => {
        setInnerValue(value)
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='input'>
            <input className='input__inner' value={value} onChange={handleChange} type={type} placeholder={placeholder} />
        </div>
        
    );
};

export default Input;