import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export default function Header({ menuOpen = false, setMenuOpen }: HeaderProps) {
  const handleNavClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#research" className="nav-link" onClick={handleNavClick}>Research</a>
        <a href="#products" className="nav-link" onClick={handleNavClick}>Products</a>
        <a href="#vision" className="nav-link" onClick={handleNavClick}>Vision</a>
        <a href="#team" className="nav-link" onClick={handleNavClick}>Team</a>
      </nav>
      <a href="#contact" className="btn btn-outline header-cta">Get in Touch</a>
    </header>
  );
}
