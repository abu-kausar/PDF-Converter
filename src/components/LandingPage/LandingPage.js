import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Help from '../Help/Help';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';
import Tools from '../Tools/Tools';

const LandingPage = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/tools' element={<Tools/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/help' element={<Help/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default LandingPage;