import React from 'react';
import { Link } from 'react-router-dom';
import firstImg from '../../images/small-1.svg'
import secondImg from '../../images/small-2.svg'
import thirdImg from '../../images/small-3.svg'
import fourthImg from '../../images/small-4.svg'
import fifthImg from '../../images/small-5.svg'
import sixthImg from '../../images/small-6.svg'

const Home = () => {
    return (
        <>
            {/* <div class="container text-center">
                 <div class="row">
                    <div class="col">
                         1 of 2
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                 </div>
             </div> */}
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div style={{ marginRigt: '10px' }} className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>We make PDF easy</h1>
                    <p className="text-secondary">All the tools you’ll need to be more productive and work smarter with documents.</p>
                    <Link to="/tools">
                        <button style={{ margin: '5px' }} className="btn btn-secondary">Explore All PDF Tools</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={firstImg} alt="" />
                </div>
            </main>

            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div style={{ marginRigt: '10px' }} className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Work Directly on Your Files</h1>
                    <p className="text-secondary">Do more than just view PDFs. Highlight and add text, images, shapes, and freehand annotations to your documents. You can connect to 20 other tools to enhance your files further.</p>
                    <a style={{ margin: '5px' }} className="btn btn-secondary">Convert Now</a>

                </div>
                <div className="col-md-6">
                    <img src={secondImg} alt="" />
                </div>
            </main>


            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img src={thirdImg} alt="" />
                </div>

                <div style={{ marginRigt: '10px' }} className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Digital Signatures Made Easy</h1>
                    <p className="text-secondary">Fill in forms, e-sign contracts, and close deals in a few simple steps. You can also request e-signatures and track your document every step of the way.</p>
                    <a style={{ margin: '5px' }} className="btn btn-secondary">Try Now</a>

                </div>

            </main>


            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div style={{ marginRigt: '10px' }} className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Create the Perfect Document</h1>
                    <p className="text-secondary">File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages. Smallpdf has it all.</p>
                    <a style={{ margin: '5px' }} className="btn btn-secondary">View all PDF tools</a>

                </div>
                <div className="col-md-6">
                    <img src={fourthImg} alt="" />
                </div>
            </main>


            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img src={fifthImg} alt="" />
                </div>

                <div style={{ marginRigt: '10px' }} className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Manage Documents—All in One Place</h1>
                    <p className="text-secondary">No more working across multiple apps! Save time by storing, managing, and sharing files across devices—straight from our web platform.</p>
                    <a style={{ margin: '5px' }} className="btn btn-secondary">Try Now</a>

                </div>

            </main>

            <section style={{ margin: '50px' }} className="d-flex justify-content-center">
                <img src={sixthImg} alt="" />
            </section>

        </>
    );
};

export default Home;