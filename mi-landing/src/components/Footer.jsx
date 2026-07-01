// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Barber<span>Style</span></span>
          <p>Tu estilo, nuestra pasión.</p>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p><i className="bi bi-geo-alt"></i> Renca, Santiago</p>
          <p><i className="bi bi-telephone"></i> +569 1234 5678</p>
          <p><i className="bi bi-clock"></i> Lun-Sáb · 10:00 - 20:00</p>
        </div>
        <div className="footer-col">
          <h4>Síguenos</h4>
          <div className="social">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BarberStyle. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}