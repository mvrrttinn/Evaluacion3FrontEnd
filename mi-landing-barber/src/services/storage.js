// src/services/storage.js
const STORAGE_KEY = 'barberstyle_reservas'

export function getReservas() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    const parsed = JSON.parse(data)
    if (!Array.isArray(parsed)) {
      console.warn('Datos corruptos en localStorage, reiniciando.')
      return []
    }
    return parsed
  } catch (error) {
    console.error('Error al leer localStorage:', error)
    return []
  }
}

export function addReserva(reserva) {
  try {
    const reservas = getReservas()
    const nueva = {
      ...reserva,
      id: Date.now(),                   
      createdAt: new Date().toISOString()
    }
    reservas.push(nueva)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas))
    return nueva
  } catch (error) {
    console.error('Error al guardar reserva:', error)
    return null
  }
}

export function updateReserva(id, cambios) {
  try {
    const reservas = getReservas()
    const index = reservas.findIndex(r => r.id === id)
    if (index === -1) return false
    reservas[index] = { ...reservas[index], ...cambios }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas))
    return true
  } catch (error) {
    console.error('Error al actualizar reserva:', error)
    return false
  }
}

export function deleteReserva(id) {
  try {
    const reservas = getReservas().filter(r => r.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas))
    return true
  } catch (error) {
    console.error('Error al eliminar reserva:', error)
    return false
  }
}

export function clearReservas() {
  localStorage.removeItem(STORAGE_KEY)
}