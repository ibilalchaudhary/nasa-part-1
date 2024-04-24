import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" exact="true" activeclassname="active">HOME</NavLink>
                <NavLink to="/nasa" activeclassname="active">NASA API FILTERS</NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
