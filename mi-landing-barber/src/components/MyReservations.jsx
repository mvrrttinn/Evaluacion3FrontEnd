// src/components/MyReservations.jsx
import { useState, useEffect } from 'react'
import { getReservas, updateReserva, deleteReserva } from '../services/storage'

export default function MyReservations({ refreshKey }) {
  const [reservas, setReservas] = useState([])
  const [editandoId, setEditandoId] = useState(null)
  const [formEdit, setFormEdit] = useState({ fecha: '', hora: '' })

  // READ: cargar al montar y cuando cambie refreshKey
  useEffect(() => {
    setReservas(getReservas())
  }, [refreshKey])

  const recargar = () => setReservas(getReservas())

  const iniciarEdicion = (r) => {
    setEditandoId(r.id)
    setFormEdit({ fecha: r.fecha, hora: r.hora })
  }

  const guardarEdicion = (id) => {
    if (!formEdit.fecha || !formEdit.hora) {
      alert('Fecha y hora son obligatorias')
      return
    }
    updateReserva(id, formEdit)
    setEditandoId(null)
    recargar()
  }

  const eliminar = (id) => {
    if (confirm('¿Seguro que quieres cancelar esta reserva?')) {
      deleteReserva(id)
      recargar()
    }
  }

  return (
    <section id="reservations" className="reservations">
      <div className="reservations-container">
        <h2 className="section-title">Mis Reservas</h2>
        <p className="section-subtitle">Gestiona tus citas</p>

        {reservas.length === 0 ? (
          <p className="empty-msg">Aún no tienes reservas. ¡Agenda una arriba! </p>
        ) : (
          <div className="reservations-list">
            {reservas.map(r => (
              <div key={r.id} className="reservation-card">
                {editandoId === r.id ? (
                  // Modo edición
                  <>
                    <h4>{r.nombre} — {r.servicio}</h4>
                    <input
                      type="date" value={formEdit.fecha}
                      onChange={e => setFormEdit({ ...formEdit, fecha: e.target.value })}
                    />
                    <input
                      type="time" value={formEdit.hora}
                      onChange={e => setFormEdit({ ...formEdit, hora: e.target.value })}
                    />
                    <div className="card-actions">
                      <button className="btn-primary btn-sm" onClick={() => guardarEdicion(r.id)}>
                       Guardar
                      </button>
                      <button className="btn-secondary btn-sm" onClick={() => setEditandoId(null)}>
                        Cancelar
                      </button>
                    </div>
                  </>
                ) : (
                  // Modo vista
                  <>
                    <h4><i className="bi bi-scissors"></i> {r.servicio}</h4>
                    <p><strong>Cliente:</strong> {r.nombre}</p>
                    <p><strong>Teléfono:</strong> {r.telefono}</p>
                    <p><strong>Fecha:</strong> {r.fecha} a las {r.hora}</p>
                    <div className="card-actions">
                      <button className="btn-secondary btn-sm" onClick={() => iniciarEdicion(r)}>
                       Editar
                      </button>
                      <button className="btn-danger btn-sm" onClick={() => eliminar(r.id)}>
                       Cancelar
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}