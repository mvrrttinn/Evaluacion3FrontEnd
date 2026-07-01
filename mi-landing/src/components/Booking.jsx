// src/components/Booking.jsx
import { useState } from 'react'
import { addReserva } from '../services/storage'
import { validarReserva, sanitizeString } from '../utils/validators'

const horarios = ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00', '19:00']
const servicios = ['Corte Clásico', 'Afeitado con Navaja', 'Diseño de Barba', 'Combo Premium']

export default function Booking({ onReservaCreada }) {
  const [form, setForm] = useState({
    nombre: '', telefono: '', servicio: '', fecha: '', hora: ''
  })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // limpia error de ese campo al modificarlo
    setErrores({ ...errores, [e.target.name]: null })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar antes de guardar
    const erroresValidacion = validarReserva(form)
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }

    // Sanitizar antes de guardar
    const reservaLimpia = {
      nombre: sanitizeString(form.nombre),
      telefono: sanitizeString(form.telefono),
      servicio: form.servicio,
      fecha: form.fecha,
      hora: form.hora
    }

    const guardada = addReserva(reservaLimpia)
    if (guardada) {
      setEnviado(true)
      setTimeout(() => setEnviado(false), 4000)
      setForm({ nombre: '', telefono: '', servicio: '', fecha: '', hora: '' })
      if (onReservaCreada) onReservaCreada()    
    }
  }

  return (
    <section id="booking" className="booking">
      <div className="booking-container">
        <h2 className="section-title">Agenda tu Cita</h2>
        <p className="section-subtitle">Reserva en menos de 1 minuto</p>

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div>
              <input
                type="text" name="nombre" placeholder="Tu nombre"
                value={form.nombre} onChange={handleChange}
              />
              {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
            </div>
            <div>
              <input
                type="tel" name="telefono" placeholder="Teléfono"
                value={form.telefono} onChange={handleChange}
              />
              {errores.telefono && <span className="error-msg">{errores.telefono}</span>}
            </div>
          </div>

          <select name="servicio" value={form.servicio} onChange={handleChange}>
            <option value="">Selecciona un servicio</option>
            {servicios.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errores.servicio && <span className="error-msg">{errores.servicio}</span>}

          <input
            type="date" name="fecha"
            value={form.fecha} onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}   // no permite fechas pasadas en UI
          />
          {errores.fecha && <span className="error-msg">{errores.fecha}</span>}

          <label className="form-label">Selecciona horario:</label>
          <div className="time-slots">
            {horarios.map(h => (
              <button
                type="button" key={h}
                className={`time-slot ${form.hora === h ? 'active' : ''}`}
                onClick={() => setForm({ ...form, hora: h })}
              >{h}</button>
            ))}
          </div>
          {errores.hora && <span className="error-msg">{errores.hora}</span>}

          <button type="submit" className="btn-primary btn-block">
            Confirmar reserva
          </button>

          {enviado && (
            <p className="success-msg">
             ¡Reserva guardada! Revisa tus reservas más abajo.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}