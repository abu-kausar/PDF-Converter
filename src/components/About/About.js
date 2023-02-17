import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import about from '../../images/about-us.svg'

const About = () => {
    return (
        <div className="row d-flex align-items-center about-body">
            <div className="col-md-4 offset-md-1">
                <h1>About Us</h1>
                <hr />
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis reprehenderit numquam nulla, vitae laudantium maiores iusto consequatur facere dolorem fugit aut delectus quas! Iste iusto officiis est at dignissimos nisi!</p>
                <Link to="/tools">
                    <button className="btn btn-secondary">Start Converting</button>
                </Link>
                
            </div>
            <div className="col-md-6 second-div">
            <img src={about} alt=""/>
            </div>
        </div>
    );
};

export default About;