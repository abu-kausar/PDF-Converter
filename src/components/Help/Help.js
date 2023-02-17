import React from 'react';
import './Help.css';
import help from '../../images/help.svg'

const Help = () => {
    return (
        <>
            <div className='row d-flex align-items-center vertically-firstHalf m-4'>
                <div className='col-md-5 offset-md-1'>
                    <h6 className='blueText'>The FAQs</h6>
                    <h1>Help Centre</h1>
                    <p>Everything you need to know about the website and procedure.</p>
                </div>

                <div className='col-md-5'>
                    <img src={help} alt="" />
                </div>
            </div>
            <div className="row d-flex align-items-center vertically-secondHalf">
                <div class='col-md-5 quarter'>
                    <h6 className='blueText'>Support</h6>
                    <h3>FAQs</h3>
                    <p>Everything you need to know about the process how to
                        convert <br /> the files into PDF. Can't find the answer you're
                        looking for.
                    </p>
                </div>

                <div class='col-md-5 quarter'>
                    <div className='qaSection'>
                        <h5>Is there a free trial available?</h5>
                        <p> -&gt; Yes, you can try us for 30 days. If you want, we'll provide you with a free
                            <br />
                            personalized 30-minute onboarding call to get you up as soon as possible.
                        </p>
                    </div>

                    <div className='qaSection'>
                        <h5>Can I change my plan?</h5>
                        <p>-&gt; Yes, you can whenever you want. We won't force you to stick on one plan.</p>
                    </div>

                    <div className='qaSection'>
                        <h5>What is the cancellation policy?</h5>
                        <p>-&gt; You'll have to maintain the rules as far our terms and conditions.</p>
                    </div>

                    <div className='qaSection'>
                        <h5>How does it work?</h5>
                        <p>-&gt; Just drag and drop of files and see the magic clicking just for once.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;