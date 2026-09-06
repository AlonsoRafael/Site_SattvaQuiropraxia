'use client';

import { WhatsAppIcon } from './Icons';
import { trackWhatsAppClick } from '../data/analytics';

export default function FloatingWhatsApp({ footerVisible = false, footerOffset = 20 }) {
  const whatsappNumber = '553496416009';
  const defaultMessage = 'Olá! Gostaria de agendar uma consulta na Sattva Quiropraxia ou tirar dúvidas sobre o atendimento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Atendimento rápido"
      className="floating-whatsapp-container"
      style={{ bottom: footerVisible ? `${footerOffset}px` : undefined }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para tirar dúvidas ou agendar consulta"
        className="floating-whatsapp-btn"
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <WhatsAppIcon className="floating-whatsapp-icon" size={32} />

        {/* Pulse rings */}
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <span className="floating-whatsapp-pulse floating-whatsapp-pulse-secondary" aria-hidden="true" />

        {/* Tooltip on hover */}
        <span className="floating-whatsapp-tooltip">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
