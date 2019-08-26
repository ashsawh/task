import React from 'react';
import logo from "../assets/logo.png"

/**
 * Render statistics
 *
 * @constructor
 */
const Header: React.FC = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>ToDo Application</p>
        </header>
    );
}

export default Header;
