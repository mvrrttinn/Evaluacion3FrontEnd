// src/services/api.js
// Capa de servicio para llamadas HTTP a APIs externas

// Helper genérico con manejo robusto de errores
async function fetchJSON(url, options = {}) {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000) // 🔒 timeout 8s

    const response = await fetch(url, { ...options, signal: controller.signal })
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    if (error.name === 'AbortError') {
      return { data: null, error: 'La solicitud tardó demasiado (timeout 8s)' }
    }
    if (error.message === 'Failed to fetch') {
      return { data: null, error: 'Sin conexión a internet o API no disponible' }
    }
    return { data: null, error: error.message || 'Error desconocido' }
  }
}

// ==========================================
// 👥 EQUIPO DE BARBEROS (desde randomuser.me)
// ==========================================
const TEAM_API = 'https://randomuser.me/api/?results=4&nat=us,br,es&inc=name,picture,location'

// Especialidades inventadas para asignar a cada barbero
const especialidades = [
  { rol: 'Master Barber',        spec: 'Fade & Clásicos',     exp: '12 años' },
  { rol: 'Senior Stylist',       spec: 'Diseño de Barba',     exp: '8 años'  },
  { rol: 'Barber Junior',        spec: 'Cortes Modernos',     exp: '4 años'  },
  { rol: 'Especialista Navaja',  spec: 'Afeitado Tradicional',exp: '15 años' }
]

export async function getTeam() {
  const { data, error } = await fetchJSON(TEAM_API)
  if (error) return { data: null, error }

  // Validar estructura de respuesta antes de procesar
  if (!data || !Array.isArray(data.results)) {
    return { data: null, error: 'Respuesta de API en formato inesperado' }
  }

  // Mapear al formato que necesita la UI
  const team = data.results.map((person, i) => ({
    id: `${person.name.first}-${i}`,
    nombre: `${person.name.first} ${person.name.last}`,
    foto: person.picture.large,
    ciudad: person.location.city,
    pais: person.location.country,
    ...especialidades[i % especialidades.length] // asigna rol/spec/exp
  }))

  return { data: team, error: null }
}