import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../About/About';
import Help from '../Help/Help';
import Home from '../Home/Home';
import JpgToPdf from '../JpgToPdf/JpgToPdf';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';
import PdfToJpg from '../PdfToJpg/PdfToJpg';
import Tools from '../Tools/Tools';
import WordToPdf from '../WordToPdf/WordToPdf';

const LandingPage = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/tools' element={<Tools/>}/>
                    <Route exact path='/jpg-to-pdf' element={<JpgToPdf/>}/>
                    <Route exact path='/word-to-pdf' element={<WordToPdf/>}/>
                    <Route exact path='/pdf-to-jpg' element={<PdfToJpg/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/help' element={<Help/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default LandingPage;