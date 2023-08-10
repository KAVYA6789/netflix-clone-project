
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import TvShows from './TvShows';
import Movies from './Movies';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/HomePage" element={<HomePage/>} />
                <Route path="/Tvshows" element={<TvShows/>} />
                <Route path="/Movies" element={<Movies/>} />
            </Routes>
        </Router>
    );
};

export default App;
