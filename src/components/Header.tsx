import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Adjusted Logo component from SVG specs scale using a div that forces width */}
        <Logo />
      </div>
      <nav className="nav-links">
        <a href="#products" className="nav-link">Products</a>
        <a href="#vision" className="nav-link">Vision</a>
        <a href="#research" className="nav-link">Research</a>
        <a href="#team" className="nav-link">Team</a>
      </nav>
      <a href="#contact" className="btn btn-outline">Get in Touch</a>
    </header>
  );
}
