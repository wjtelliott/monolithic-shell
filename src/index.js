/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Home/LandingPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<LandingPage />}
            />
        </Routes>
    </BrowserRouter>
);

//!reportWebVitals() here
