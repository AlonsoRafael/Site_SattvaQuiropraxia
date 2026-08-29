import Gallery from './Gallery';
import { gallery } from '../data/siteData';
import { LocationDotIcon, WhatsAppIcon, PhoneIcon, EnvelopeIcon, InstagramIcon } from './Icons';
import { trackWhatsAppClick, trackSocialClick } from '../data/analytics';

export default function Contact() {
  return (
    <section className="section-padded bg-dark" id="contato">
      <div className="container fade-in">
        <h2 className="section-title text-center text-light">Meu Espaço</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <LocationDotIcon style={{ marginTop: '5px', minWidth: '16px', flexShrink: 0 }} />
              <div>
                DERMAC CLÍNICA - Av. Nicomedes Alves dos Santos, 1500 - Morada da
                Colina (Espaço Fabiana Garcia, PÁTIO DERMAC), Uberlândia-MG,
                38411-106
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <WhatsAppIcon style={{ marginTop: '5px', minWidth: '16px', flexShrink: 0 }} color="#25D366" />
              <div>
                <a
                  href="https://wa.me/553496416009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20e%20saber%20mais%20sobre%20os%20atendimentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_section')}
                  style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}
                >
                  Envie uma mensagem no WhatsApp
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <PhoneIcon style={{ marginTop: '5px', minWidth: '16px', flexShrink: 0 }} />
              <div>
                <a
                  href="https://wa.me/553496416009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20e%20saber%20mais%20sobre%20os%20atendimentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_phone_link')}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  (34) 99641 6009
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <EnvelopeIcon style={{ marginTop: '5px', minWidth: '16px', flexShrink: 0 }} />
              <div>
                quirobetogoulart@gmail.com
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
              <InstagramIcon style={{ marginTop: '5px', minWidth: '16px', flexShrink: 0 }} />
              <div>
                <a
                  href="https://www.instagram.com/quiro.betogoulart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('instagram')}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  @quiro.betogoulart
                </a>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Localização da Sattva Saúde Integrativa no Google Maps"
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

