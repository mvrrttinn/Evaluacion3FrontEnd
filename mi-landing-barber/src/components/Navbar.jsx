// src/components/Navbar.jsx
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          Barber<span>Style</span>
        </a>

        {/* Links escritorio */}
        <ul className="navbar-links">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#barbers">Equipo</a></li>
          <li><a href="#booking">Agendar</a></li>
          <li><a href="#reviews">Reseñas</a></li>
          <li><a href="#booking" className="navbar-cta">Reservar</a></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#gallery" onClick={closeMenu}>Galería</a>
        <a href="#barbers" onClick={closeMenu}>Equipo</a>
        <a href="#booking" onClick={closeMenu}>Agendar</a>
        <a href="#reviews" onClick={closeMenu}>Reseñas</a>
        <a href="#booking" className="navbar-cta" onClick={closeMenu}>Reservar</a>
      </div>
    </nav>
  )
}