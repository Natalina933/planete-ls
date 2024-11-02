import React from 'react';
import logo from '../assets/img/MiniLogo.svg';
import './styles/header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">Planète LS</a>
                <img src={logo} alt="logo" className="logo-image" />
            </div>
            <nav className="nav">
                <a href="/">Postez un besoin</a>
                <a href="/">Devenir prestataire</a>
                <a href="/">Inscription</a>
                <a href="/">Connexion</a>
            </nav>
        </header>
    );
}

export default Header;
