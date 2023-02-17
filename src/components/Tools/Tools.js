import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/convertpdf">
                        <div className="col-md-4">
                            <div style={toolStyle}>
                                <h3>JPG to PDF</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </Link>

                    <Link>
                        <div className="col-md-4">
                            <div style={toolStyle}>
                                <h3>Word to PDF</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Tools;