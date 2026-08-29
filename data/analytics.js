// Utilitário para rastreamento de eventos personalizados no Google Analytics (GA4)

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Registra cliques no WhatsApp com nomes claros em português para fácil visualização
 * @param {'topo' | 'flutuante' | 'contato' | 'telefone'} location
 */
export function trackWhatsAppClick(location = 'geral') {
  // Mapa de nomes super claros que aparecem direto na lista principal do Analytics
  const eventNameMap = {
    header: 'clique_whatsapp_topo',
    topo: 'clique_whatsapp_topo',
    floating_button: 'clique_whatsapp_flutuante',
    flutuante: 'clique_whatsapp_flutuante',
    contact_section: 'clique_whatsapp_contato',
    contato: 'clique_whatsapp_contato',
    contact_phone_link: 'clique_whatsapp_telefone',
    telefone: 'clique_whatsapp_telefone'
  };

  const clearEventName = eventNameMap[location] || `clique_whatsapp_${location}`;

  // 1. Evento com nome claro e direto em português (aparece na lista principal)
  trackEvent(clearEventName, {
    origem: location,
    canal: 'WhatsApp'
  });

  // 2. Evento padrão do Google para métricas de conversão / leads
  trackEvent('generate_lead', {
    origem: location,
    metodo: 'WhatsApp'
  });
}

/**
 * Registra cliques em redes sociais (ex: Instagram)
 * @param {string} network
 */
export function trackSocialClick(network = 'instagram') {
  trackEvent('clique_instagram', {
    rede_social: network
  });
}
