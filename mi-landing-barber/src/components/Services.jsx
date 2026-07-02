// src/components/Services.jsx
import { useState } from 'react'
import ServiceModal from './ServiceModal'

const services = [
  {
    id: 1,
    icon: 'bi-scissors',
    title: 'Corte Clásico',
    price: '$8.000',
    desc: 'Corte tradicional con tijera y máquina.',
    details: 'Incluye lavado, corte personalizado según el rostro, peinado y aplicación de productos premium. Duración aprox: 40 min.'
  },
  {
    id: 2,
    icon: 'bi-droplet',
    title: 'Afeitado con Navaja',
    price: '$10.000',
    desc: 'Afeitado tradicional con toalla caliente.',
    details: 'Ritual completo con toalla caliente, espuma artesanal, afeitado con navaja y aftershave. Duración: 30 min.'
  },
  {
    id: 3,
    icon: 'bi-stars',
    title: 'Diseño de Barba',
    price: '$7.000',
    desc: 'Perfilado y diseño profesional.',
    details: 'Perfilado, recorte y diseño según tu estilo. Incluye aceite hidratante para barba. Duración: 25 min.'
  },
  {
    id: 4,
    icon: 'bi-gem',
    title: 'Combo Premium',
    price: '$15.000',
    desc: 'Corte + barba + tratamiento capilar.',
    details: 'El paquete más completo: corte personalizado, diseño de barba, mascarilla capilar y masaje. Duración: 75 min.'
  }
]

export default function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Calidad premium en cada visita</p>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.id}>
              <div className="service-icon">
                <i className={`bi ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <p className="service-price">{s.price}</p>
              <button
                className="btn-primary btn-sm"
                onClick={() => setSelected(s)}
              >
                Ver detalles
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ServiceModal
          service={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}