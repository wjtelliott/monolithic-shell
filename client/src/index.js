/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Components/404/Page404';
import LandingPage from './Components/Home/LandingPage';
import NavBar from './Components/Shared/NavBar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route
                path="/"
                element={<LandingPage />}
            />
            <Route
                path="*"
                element={<Page404 />}
            />
        </Routes>
    </BrowserRouter>
);

//!reportWebVitals() here
