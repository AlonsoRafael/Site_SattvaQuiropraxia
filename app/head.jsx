export default function Head() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="Sze5uJBl5ZcBmvyT_ED8O4e_sjPKRjJZZTH2uJiS0E0"
      />
      <meta name="geo.region" content="BR-MG" />
      <meta name="geo.placename" content="Uberlândia" />
      <meta name="geo.position" content="-18.921389;-48.250551" />
      <meta name="ICBM" content="-18.921389, -48.250551" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Sattva Saúde Integrativa',
            image: 'https://www.sattvaquiropraxia.site/imagens/logo.png',
            logo: 'https://www.sattvaquiropraxia.site/imagens/logo.png',
            url: 'https://www.sattvaquiropraxia.site/',
            description:
              'Av. Nicomedes Alves dos Santos, 1500 - Morada da Colina, Uberlândia/MG. Ajudo pessoas com dores e inflamações a recuperarem a qualidade de vida com quiropraxia, agulhamento distal e técnicas integrativas eficazes, rápidas e seguras.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Av. Nicomedes Alves dos Santos, 1500',
              addressLocality: 'Uberlândia',
              addressRegion: 'MG',
              postalCode: '38411-106',
              addressCountry: 'BR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -18.921389,
              longitude: -48.250551
            },
            telephone: '+55-34-98346-009',
            email: 'quirobetogoulart@gmail.com',
            priceRange: '$$',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              opens: '08:00',
              closes: '18:00'
            },
            sameAs: ['https://www.instagram.com/quiro.betogoulart/']
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Sattva Saúde Integrativa',
            url: 'https://www.sattvaquiropraxia.site/',
            logo: 'https://www.sattvaquiropraxia.site/imagens/logo.png',
            description: 'Quiropraxia e agulhamento distal em Uberlândia/MG',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+55-34-98346-009',
              contactType: 'Customer Service',
              areaServed: 'BR',
              availableLanguage: 'Portuguese'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Av. Nicomedes Alves dos Santos, 1500',
              addressLocality: 'Uberlândia',
              addressRegion: 'MG',
              postalCode: '38411-106',
              addressCountry: 'BR'
            },
            sameAs: ['https://www.instagram.com/quiro.betogoulart/']
          })
        }}
      />
    </>
  );
}
