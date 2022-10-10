import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <h2>QUIZ MASTER</h2>
            
            <div className='links'>
                <Link to="/">HOME</Link>
                <Link to="/statistics">STATISTICS</Link>
                <Link to="/blog">BLOG</Link>
            </div>
        </nav>
    );
};

export default Header;