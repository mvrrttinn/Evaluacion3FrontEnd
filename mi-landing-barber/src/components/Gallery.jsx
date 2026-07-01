// src/components/Gallery.jsx
import { useState } from 'react'

const cuts = [
  {
    id: 1,
    title: 'Fade Clásico',
    category: 'clasico',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80'
  },
  {
    id: 2,
    title: 'Undercut Moderno',
    category: 'moderno',
    img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80'
  },
  {
    id: 3,
    title: 'Pompadour',
    category: 'clasico',
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80'
  },
  {
    id: 4,
    title: 'Buzz Cut',
    category: 'moderno',
    img: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=600&q=80'
  },
  {
    id: 5,
    title: 'Texturizado',
    category: 'moderno',
    img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80'
  },
  {
    id: 6,
    title: 'Barba Full',
    category: 'barba',
    img: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?w=600&q=80'
  },
  {
    id: 7,
    title: 'Slick Back',
    category: 'clasico',
    img: 'https://images.unsplash.com/photo-1593702288056-7927b8a73fce?w=600&q=80'
  },
  {
    id: 8,
    title: 'Barba Diseñada',
    category: 'barba',
    img: 'https://images.unsplash.com/photo-1635273051937-a0386ace1e21?w=600&q=80'
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
  const [seleccionada, setSeleccionada] = useState(null) // para el lightbox

  // Filtrado declarativo: si es 'todos' devuelve todo, sino filtra
  const visibles = filtro === 'todos'
    ? cuts
    : cuts.filter(c => c.category === filtro)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Galería de Cortes</h2>
        <p className="section-subtitle">Inspírate con nuestros trabajos</p>

        {/* Botones de filtro */}
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

        {/* Grid de imágenes */}
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
          <p className="empty-msg">No hay cortes en esta categoría 🤔</p>
        )}
      </div>

      {/* Lightbox: modal con la foto grande */}
      {seleccionada && (
        <div className="lightbox-overlay" onClick={() => setSeleccionada(null)}>
          <button className="lightbox-close" aria-label="Cerrar">
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={seleccionada.img} alt={seleccionada.title} />
            <h3>{seleccionada.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}