import React from 'react';
import { jsPDF } from "jspdf";
import './WordToPdf.css';

const WordToPdf = () => {

    var image;

    const loadFile = (event) => {
        image = document.createElement("word");
        image.src = URL.createObjectURL(event.target.files[0]);
    }
    
    const convertToPdf = () => {
        const doc = new jsPDF();
        doc.addImage(image, "WORD", 15, 40, 180, 180);
        doc.save();
    }
    return (
        <div className='area'>
            <h2>Add files what you want to convert</h2>
            <input type="file" onChange={loadFile} name="" id="" accept='.doc, .docx'/>
            <br /><br />
            <button onClick={convertToPdf}>Convert</button>
        </div>
    );
};

export default WordToPdf;