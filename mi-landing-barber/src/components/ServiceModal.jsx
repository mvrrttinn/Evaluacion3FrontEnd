// src/components/ServiceModal.jsx
export default function ServiceModal({ service, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation evita que al hacer click dentro se cierre */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="modal-icon">
          <i className={`bi ${service.icon}`}></i>
        </div>
        <h3>{service.title}</h3>
        <p className="service-price">{service.price}</p>
        <p>{service.details}</p>
        <a href="#booking" className="btn-primary" onClick={onClose}>
          Reservar ahora
        </a>
      </div>
    </div>
  )
}