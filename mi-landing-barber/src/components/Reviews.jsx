// src/components/Reviews.jsx
import { useState } from 'react'

const reviews = [
  { id: 1, name: 'Carlos M.', stars: 5, text: 'Excelente atención, el mejor fade que me he hecho. 100% recomendado.' },
  { id: 2, name: 'Diego P.',  stars: 5, text: 'Profesionales de verdad. El combo premium vale cada peso.' },
  { id: 3, name: 'Andrés R.', stars: 4, text: 'Muy buen ambiente y servicio. Volveré sin duda.' },
  { id: 4, name: 'Felipe S.', stars: 5, text: 'El diseño de barba quedó impecable. Atención top.' }
]

export default function Reviews() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id) // si ya está abierto, lo cierra
  }

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>

        <div className="accordion-list">
          {reviews.map((r) => (
            <div className={`accordion-item ${openId === r.id ? 'open' : ''}`} key={r.id}>
              <button className="accordion-header" onClick={() => toggle(r.id)}>
                <span>
                  <strong>{r.name}</strong>
                  <span className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
                </span>
                <i className={`bi ${openId === r.id ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </button>
              <div className="accordion-body">
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}