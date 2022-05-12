import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar';



const index = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/profil"  element={<Profil />} />
                    <Route path="/trending"  element={<Trending />} />
                    <Route path="*" element= {<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default index;