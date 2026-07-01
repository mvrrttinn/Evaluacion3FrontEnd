// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Barbería Premium</p>
        <h1 className="hero-title">
          Estilo que <span>marca diferencia</span>
        </h1>
        <p className="hero-subtitle">
          Cortes clásicos y modernos con la mejor experiencia. Reserva tu hora online en segundos.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn-primary">Agendar cita</a>
          <a href="#services" className="btn-secondary">Ver servicios</a>
        </div>
      </div>
    </section>
  )
}