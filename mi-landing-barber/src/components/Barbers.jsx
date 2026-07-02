// src/components/Barbers.jsx
import { useState, useEffect } from 'react'
import { getTeam } from '../services/api'

export default function Barbers() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const cargarEquipo = async () => {
    setLoading(true)
    setError(null)
    const { data, error: errApi } = await getTeam()
    if (errApi) {
      setError(errApi)
    } else {
      setTeam(data)
    }
    setLoading(false)
  }


  useEffect(() => {
    let activo = true 

    const cargar = async () => {
      const { data, error: errApi } = await getTeam()
      if (!activo) return
      if (errApi) setError(errApi)
      else setTeam(data)
      setLoading(false)
    }

    cargar()
    return () => { activo = false }
  }, [])

  return (
    <section id="barbers" className="barbers">
      <div className="barbers-container">
        <h2 className="section-title">Nuestro Equipo</h2>
        <p className="section-subtitle">
          Profesionales certificados · <small>(datos desde API en vivo )</small>
        </p>

        {/* Estado 1: Cargando */}
        {loading && (
          <div className="loading-msg">
            <div className="spinner"></div>
            <p>Cargando equipo desde la API...</p>
          </div>
        )}

        {/* Estado 2: Error con botón de reintentar */}
        {error && !loading && (
          <div className="error-box">
            <p>❌ <strong>Error al cargar el equipo:</strong></p>
            <p>{error}</p>
            <button className="btn-primary btn-sm" onClick={cargarEquipo}>
              Reintentar
            </button>
          </div>
        )}

        {/* Estado 3: Datos cargados */}
        {!loading && !error && (
          <>
            <div className="barbers-grid">
              {team.map(b => (
                <div className="barber-card" key={b.id}>
                  <div className="barber-photo">
                    <img
                      src={b.foto}
                      alt={b.nombre}
                      loading="lazy"
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
                  <a href="#booking" className="btn-primary btn-sm btn-block">
                    Reservar con {b.nombre.split(' ')[0]}
                  </a>
                </div>
              ))}
            </div>

            {/* Botón para recargar el equipo (refresca con nuevas personas) */}
            <div className="barbers-actions">
              <button className="btn-secondary" onClick={cargarEquipo}>
                 Cargar otro equipo
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}