// Utilitário para rastreamento de eventos personalizados no Google Analytics (GA4)

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Registra cliques no WhatsApp como conversão (Lead) no GA4
 * @param {'header' | 'floating_button' | 'contact_section' | 'phone_link'} location
 */
export function trackWhatsAppClick(location = 'unknown') {
  // Evento padrão recomendado pelo Google para geração de leads/contatos
  trackEvent('generate_lead', {
    event_category: 'Conversão',
    event_label: `WhatsApp - ${location}`,
    button_location: location,
    value: 1
  });

  // Evento personalizado específico para filtragem no painel
  trackEvent('whatsapp_click', {
    button_location: location
  });
}

/**
 * Registra cliques em redes sociais (ex: Instagram)
 * @param {string} network
 */
export function trackSocialClick(network = 'instagram') {
  trackEvent('social_click', {
    event_category: 'Redes Sociais',
    network: network
  });
}
