import React from 'react';
import firstImg from '../../images/small-1.svg'

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
                    <button style={{ margin: '5px' }} className="btn btn-primary">Start Free Trial</button>
                    <button style={{ margin: '5px' }} className="btn btn-secondary">Explore All PDF Tools</button>
                </div>
                <div className="col-md-6">
                    <img src={firstImg} alt="" />
                </div>
            </main>
        </>
    );
};

export default Home;