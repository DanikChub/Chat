import React, { useState } from 'react';

const CheckBox = ({setYou}) => {
    const [inp, setInp] = useState(false);

    const handleChange = (e) => {
        setInp(!e.currentTarget.checked)
        setYou(inp)
    }

    return (
        <input type="checkbox" 
            value={inp}
            onChange={handleChange}
        />
    );
};

export default CheckBox;