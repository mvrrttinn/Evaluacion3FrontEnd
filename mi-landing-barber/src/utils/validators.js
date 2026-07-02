// src/utils/validators.js

export function sanitizeString(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/[<>]/g, '')         
    .trim()
    .slice(0, 100)                  
}

export function validarNombre(nombre) {
  const limpio = sanitizeString(nombre)
  if (limpio.length < 2) return 'El nombre debe tener al menos 2 caracteres'
  if (limpio.length > 50) return 'El nombre es demasiado largo'
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(limpio)) return 'Solo se permiten letras'
  return null
}

export function validarTelefono(tel) {
  const limpio = tel.replace(/\s/g, '')
  if (!/^\+?[0-9]{8,15}$/.test(limpio)) return 'Teléfono inválido (8-15 dígitos)'
  return null
}

export function validarFecha(fecha) {
  if (!fecha) return 'La fecha es obligatoria'
  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  const seleccionada = new Date(fecha)
  if (seleccionada < hoy) return 'No se pueden agendar fechas pasadas'
  return null
}

export function validarReserva(form) {
  const errores = {}
  const errNombre = validarNombre(form.nombre)
  if (errNombre) errores.nombre = errNombre
  const errTel = validarTelefono(form.telefono)
  if (errTel) errores.telefono = errTel
  if (!form.servicio) errores.servicio = 'Selecciona un servicio'
  const errFecha = validarFecha(form.fecha)
  if (errFecha) errores.fecha = errFecha
  if (!form.hora) errores.hora = 'Selecciona un horario'
  return errores
}