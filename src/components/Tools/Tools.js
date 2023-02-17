import React from 'react';
import { Link } from 'react-router-dom';
import './Tools.css'

const Tools = () => {
    const toolStyle = {
        margin: '20px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(242, 246, 250)'
    }

    return (

        <div className="container">
            <div >
                <h1 style={{ textAlign: 'center', marginTop: '150px' }}>Available PDF Tools</h1>
                <p style={{ textAlign: 'center' }}> Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.</p>
                <div className="row">
                    <div className="col-md-4">
                        <Link className='divDesign' to="/jpg-to-pdf">
                            <div style={toolStyle}>
                                <h3>JPG to PDF</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link className='divDesign' to="/word-to-pdf">
                        <div style={toolStyle}>
                                <h3>WORD to PDF</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-4">
                        <Link className='divDesign' to="/pdf-to-jpg">
                        <div style={toolStyle}>
                                <h3>PDF to JPG</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Tools;