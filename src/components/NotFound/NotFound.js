import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1>OOPS!</h1>
            <h2>404-Page Not Found</h2>
            <p>
                The page you are looking for might have been removed <br />
                had it's name changed or is temporarily unavailable.
            </p>
            <Link to="/"><button class="btn btn-success">GO TO HOMEPAGE</button></Link>
        </div>
    );
};

export default NotFound;