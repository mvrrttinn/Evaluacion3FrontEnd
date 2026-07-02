// src/components/Gallery.jsx
import { useState } from 'react'

const cuts = [
  {
    id: 1,
    title: 'Fade Clásico',
    category: 'clasico',
    img: '/img/FadeClasico.jpg'
  },
  {
    id: 2,
    title: 'Undercut Moderno',
    category: 'moderno',
    img: '/img/UnderCutModerno.jpg'
  },
  {
    id: 3,
    title: 'Pompadour',
    category: 'clasico',
    img: '/img/PompadourClasico.jpg'
  },
  {
    id: 4,
    title: 'Buzz Cut',
    category: 'moderno',
    img: '/img/BuzzCut.jpg'
  },
  {
    id: 5,
    title: 'Texturizado',
    category: 'moderno',
    img: '/img/Texturizado.jpg'
  },
  {
    id: 6,
    title: 'Barba Full',
    category: 'barba',
    img: '/img/FullBarba.jpg'
  },
  {
    id: 7,
    title: 'Slick Back',
    category: 'clasico',
    img: '/img/SlickBackClasico.jpg'
  },
  {
    id: 8,
    title: 'Barba Diseñada',
    category: 'barba',
    img: '/img/BarbaDiseñada.jpg'
  }
]

const categorias = [
  { key: 'todos',   label: 'Todos' },
  { key: 'clasico', label: 'Clásicos' },
  { key: 'moderno', label: 'Modernos' },
  { key: 'barba',   label: 'Barba' }
]

export default function Gallery() {
  const [filtro, setFiltro] = useState('todos')
  const [seleccionada, setSeleccionada] = useState(null)

  const visibles = filtro === 'todos'
    ? cuts
    : cuts.filter(c => c.category === filtro)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Galería de Cortes</h2>
        <p className="section-subtitle">Inspírate con nuestros trabajos</p>

        <div className="gallery-filters">
          {categorias.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${filtro === cat.key ? 'active' : ''}`}
              onClick={() => setFiltro(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visibles.map(c => (
            <div
              key={c.id}
              className="gallery-item"
              onClick={() => setSeleccionada(c)}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600/16161c/d4a24a?text=BarberStyle'
                }}
              />
              <div className="gallery-overlay">
                <span>{c.title}</span>
                <i className="bi bi-zoom-in"></i>
              </div>
            </div>
          ))}
        </div>

        {visibles.length === 0 && (
          <p className="empty-msg">No hay cortes en esta categoría</p>
        )}
      </div>

      {seleccionada && (
        <div className="lightbox-overlay" onClick={() => setSeleccionada(null)}>
          <button className="lightbox-close" aria-label="Cerrar">
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={seleccionada.img} 
              alt={seleccionada.title} 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x600/16161c/d4a24a?text=BarberStyle'
              }}
            />
            <h3>{seleccionada.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}
