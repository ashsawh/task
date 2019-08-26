import React from 'react';
import logo from "../assets/logo.png"
import userlogo from "../assets/teamwork.png"

/**
 * Render the head with logo and name
 * @constructor
 */
const Header: React.FC = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span>ToDo Application</span>
            <div id="login">
                <img src={userlogo} alt="user" />
            </div>
        </header>
    );
};

export default Header;
