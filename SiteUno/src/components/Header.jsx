import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image.avif';

const Header = () => {
    return (
        <header className="app-header">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/rules">Rules</Link>
                        </li>
                        <li>
                            <Link to="/howtoplay">How to Play</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
