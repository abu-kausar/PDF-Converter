import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';

const LandingPage = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default LandingPage;