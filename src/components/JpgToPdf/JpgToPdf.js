import React from 'react';
import { jsPDF } from "jspdf";
import './JpgToPdf.css'

const JpgToPdf = () => {

    var image;

    const loadFile = (event) => {
        image = document.createElement("img");
        image.src = URL.createObjectURL(event.target.files[0]);
    }
    
    const convertToPdf = () => {
        const doc = new jsPDF();
        doc.addImage(image, "JPEG", 15, 40, 180, 180);
        doc.save();
    }
    return (
        <div className='area'>
            <h2>Add files what you want to convert</h2>
            <input type="file" onChange={loadFile} name="" id="" accept='.png, .jpg, .jpeg'/>
            <br /><br />
            <button onClick={convertToPdf}>Convert</button>
        </div>
    );
};

export default JpgToPdf;