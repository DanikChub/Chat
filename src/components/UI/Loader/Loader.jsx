import React from 'react';
import { useState, useEffect } from 'react';
import './Loader.css'

const Loader = ({setSrc, setImagePreview}) => {
    const [inp, setInp] = useState(null);
   

    const handleChange = (e) => {
        setInp(e.currentTarget);
        setSrc(inp)

        if (inp) {
            let reader = new FileReader();

            reader.addEventListener('load', (e) => {
                
                var originalImg = new Image();
                originalImg.src = e.target.result;
    
                setImagePreview(originalImg.src)
                
                
            }) 
            reader.readAsDataURL(inp.files[0]);
        }
        

    }

    // const CompressImage = (base64) =>  {
    //     const canvas = document.createElement('canvas');
    //     const img = document.createElement('img');
        
    //     img.onload = function () {
    //         let width = img.width;
    //         let height = img.height;
    //         const maxHeight = 300;
    //         const maxWidth = 800;
    //         let photoClass = "photoV";
    
    //         if (width > height) {
    //             if (width > maxWidth) {
    //                 height = Math.round((height *= maxWidth / width))
    //                 width = maxWidth
    //             }
    //             photoClass = "photoH";
    //         } else {
    //             if (height > maxHeight) {
    //                 width = Math.round((width *= maxHeight / height))
    //                 height = maxHeight
    //             }
    //             photoClass = "photoV";
    //         }
    
    //         canvas.width = width;
    //         canvas.height = height;
    
    //         const ctx = canvas.getContext('2d');
    //         ctx.drawImage(img, 0, 0, width, height)
    
    //         let compressedData = canvas.toDataURL('image/jpeg', 0.7);
    //         setSrc(compressedData);
            
    //     }
    //     img.src=base64;
    // }
    

    return (
        <div>
            <input 
                onChange={handleChange}
                type="file" 
                className='inputFile' 
                id='inputFile'
            />
            <label htmlFor="inputFile">
                <i className='bx bx-up-arrow-circle bx-rotate-180' ></i>
            </label>
            
        </div>
    );
};


export default Loader;