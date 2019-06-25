import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
    return (
        <div className="navbar">
            <NavLink to="/" className="nav">Home</NavLink>
            <NavLink to="/about" className="nav">About</NavLink>
            <NavLink to="/contact" className="nav">Contact</NavLink>
            <Link to="/error" className="nav">Error</Link>
        </div>
    );
}

export default Navigation;