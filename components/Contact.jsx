import Gallery from './Gallery';
import { gallery } from '../data/siteData';

export default function Contact() {
  return (
    <section className="section-padded bg-dark" id="contato">
      <div className="container fade-in">
        <h2 className="section-title text-center text-light">Meu Espaço</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <i className="fa-solid fa-location-dot" style={{ marginTop: '5px', minWidth: '16px' }} />
              <div>
                DERMAC CLÍNICA - Av. Nicomedes Alves dos Santos, 1500 - Morada da
                Colina (Espaço Fabiana Garcia, PÁTIO DERMAC), Uberlândia-MG,
                38411-106
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <i className="fa-solid fa-phone" style={{ marginTop: '5px', minWidth: '16px' }} />
              <div>
                (34) 99641 6009
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <i className="fa-solid fa-envelope" style={{ marginTop: '5px', minWidth: '16px' }} />
              <div>
                quirobetogoulart@gmail.com
              </div>
            </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                <i className="fa-brands fa-instagram" style={{ marginTop: '5px', minWidth: '16px' }} />
                <div>
                  <a href="https://www.instagram.com/quiro.betogoulart/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    @quiro.betogoulart
                  </a>
                </div>
              </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.681062842014!2d-48.27697260485207!3d-18.93845143086491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445d7e9dda5db%3A0xaac414743f141115!2sSattva%20Sa%C3%BAde%20Integrativa%20-%20Beto%20Goulart!5e0!3m2!1spt-BR!2sbr!4v1777919927522!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-gallery">
            <h3 className="section-subtitle">Consultório</h3>
            <Gallery gallery={gallery} />
          </div>
        </div>
      </div>
    </section>
  );
}
