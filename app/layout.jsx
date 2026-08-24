import { Lato, Montserrat } from 'next/font/google';
import { faqs } from '../data/siteData';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['600', '700'],
  display: 'swap'
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://www.sattvaquiropraxia.site'),
  title: {
    default: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
    template: '%s | Sattva Saúde Integrativa'
  },
  description:
    'Especialista em alívio da dor na coluna, nervo ciático e inflamações com Quiropraxia, Acupuntura Distal e Magnetoterapia em Uberlândia/MG. Agende sua consulta com Beto Goulart!',
  keywords: [
    'quiropraxia uberlandia',
    'quiropraxista em uberlandia',
    'quiropraxia perto de mim',
    'dor na coluna uberlandia',
    'dor ciatico uberlandia',
    'tratamento hernia de disco uberlandia',
    'acupuntura uberlandia',
    'agulhamento distal',
    'magnetoterapia uberlandia',
    'saude integrativa uberlandia',
    'beto goulart quiropraxia',
    'clinica sattva uberlandia'
  ],
  authors: [{ name: 'Beto Goulart - Sattva Saúde Integrativa' }],
  creator: 'Beto Goulart',
  publisher: 'Sattva Saúde Integrativa',
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  alternates: {
    canonical: 'https://www.sattvaquiropraxia.site/'
  },
  verification: {
    google: 'Sze5uJBl5ZcBmvyT_ED8O4e_sjPKRjJZZTH2uJiS0E0'
  },
  other: {
    'geo.region': 'BR-MG',
    'geo.placename': 'Uberlândia',
    'geo.position': '-18.938451;-48.276973',
    'ICBM': '-18.938451, -48.276973',
    'revisit-after': '7 days',
    'rating': 'general'
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png'
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.sattvaquiropraxia.site/',
    siteName: 'Sattva Saúde Integrativa',
    title: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
    description:
      'Recupere sua mobilidade e viva sem dor. Quiropraxia, Acupuntura Distal e Magnetoterapia eficazes e seguras em Uberlândia com Beto Goulart. Agende agora!',
    images: [
      {
        url: '/imagens/logo.png',
        width: 500,
        height: 500,
        alt: 'Sattva Saúde Integrativa - Quiropraxia em Uberlândia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
    description:
      'Recupere sua mobilidade e viva sem dor. Quiropraxia, Acupuntura Distal e Magnetoterapia eficazes e seguras em Uberlândia com Beto Goulart.',
    images: ['/imagens/logo.png']
  }
};

const structuredDataMedical = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Physician', 'LocalBusiness'],
  '@id': 'https://www.sattvaquiropraxia.site/#medicalbusiness',
  name: 'Sattva Saúde Integrativa - Beto Goulart | Quiropraxia em Uberlândia',
  alternateName: 'Clínica Sattva Quiropraxia',
  image: 'https://www.sattvaquiropraxia.site/imagens/logo.png',
  logo: 'https://www.sattvaquiropraxia.site/imagens/logo.png',
  url: 'https://www.sattvaquiropraxia.site/',
  telephone: '+5534996416009',
  email: 'quirobetogoulart@gmail.com',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Pix',
  description:
    'Clínica especializada em alívio rápido e seguro de dores na coluna, nervo ciático, hérnia de disco e inflamações articulares através de Quiropraxia, Acupuntura / Agulhamento Distal e Magnetoterapia em Uberlândia/MG.',
  medicalSpecialty: [
    'Chiropractic',
    'Acupuncture',
    'Holistic Medicine',
    'Physiotherapy'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Nicomedes Alves dos Santos, 1500 (Espaço Fabiana Garcia, PÁTIO DERMAC)',
    addressLocality: 'Uberlândia',
    addressRegion: 'MG',
    postalCode: '38411-106',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -18.938451,
    longitude: -48.276973
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '52',
    bestRating: '5',
    worstRating: '1'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamentos e Terapias',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Quiropraxia e Ajustes Articulares',
          description: 'Correção de subluxações, alívio de dores nas costas, pescoço, ciático e melhora postural.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Acupuntura Distal e Agulhamento',
          description: 'Tratamento sem dor no local acometido, focado no alívio rápido de processos inflamatórios.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Magnetoterapia',
          description: 'Estimulação magnética para regeneração celular, circulação e alívio de tensões crônicas.'
        }
      }
    ]
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wa.me/553496416009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.',
      inLanguage: 'pt-BR',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform'
      ]
    },
    result: {
      '@type': 'Reservation',
      name: 'Agendamento de Consulta de Quiropraxia'
    }
  },
  sameAs: ['https://www.instagram.com/quiro.betogoulart/']
};

const structuredDataFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataMedical) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFaq) }}
        />
      </head>
      <body className={`${montserrat.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
