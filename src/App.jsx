// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './components/Navigation';
import NasaApiPage from './screens/NasaApiPage';
import HomePage from './screens/Home';
import "./App.scss";

function App() {
    return (
        <Router>
            <Navigation />
            <Outlet />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nasa" element={<NasaApiPage />}>
                    <Route index element={<NasaApiPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
