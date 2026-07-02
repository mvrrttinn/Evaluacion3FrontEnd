// src/components/Barbers.jsx

const team = [
  {
    id: 1,
    nombre: 'Carlos Martínez',
    rol: 'Master Barber',
    spec: 'Fade & Cortes Clásicos',
    exp: '12 años',
    ciudad: 'Santiago',
    pais: 'Chile',
    foto: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&q=80'
  },
  {
    id: 2,
    nombre: 'Diego Fernández',
    rol: 'Senior Stylist',
    spec: 'Diseño de Barba',
    exp: '8 años',
    ciudad: 'Valparaíso',
    pais: 'Chile',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
  },
  {
    id: 3,
    nombre: 'Andrés Rojas',
    rol: 'Barber Junior',
    spec: 'Cortes Modernos',
    exp: '4 años',
    ciudad: 'Concepción',
    pais: 'Chile',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    id: 4,
    nombre: 'Felipe Soto',
    rol: 'Especialista Navaja',
    spec: 'Afeitado Tradicional',
    exp: '15 años',
    ciudad: 'Santiago',
    pais: 'Chile',
    foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80'
  }
]

export default function Barbers() {
  return (
    <section id="barbers" className="barbers">
      <div className="barbers-container">
        <h2 className="section-title">Nuestro Equipo</h2>
        <p className="section-subtitle">Profesionales certificados a tu servicio</p>

        <div className="barbers-grid">
          {team.map(b => (
            <div className="barber-card" key={b.id}>
              <div className="barber-photo">
                <img
                  src={b.foto}
                  alt={b.nombre}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200/16161c/d4a24a?text=👤'
                  }}
                />
              </div>
              <h3>{b.nombre}</h3>
              <p className="barber-role">{b.rol}</p>
              <div className="barber-info">
                <p><i className="bi bi-scissors"></i> {b.spec}</p>
                <p><i className="bi bi-award"></i> {b.exp} de experiencia</p>
                <p><i className="bi bi-geo-alt"></i> {b.ciudad}, {b.pais}</p>
              </div>
              <a href="#booking" className="btn-primary btn-sm">Reservar con {b.nombre.split(' ')[0]}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}