import { Lato, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['600', '700']
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['400', '700']
});

export const metadata = {
  metadataBase: new URL('https://www.sattvaquiropraxia.site'),
  title: {
    default: 'Clínica Sattva Quiropraxia',
    template: '%s | Clínica Sattva Quiropraxia'
  },
  description:
    'Quiropraxia, agulhamento distal e saúde integrativa em Uberlândia/MG.',
  keywords: [
    'quiropraxia',
    'agulhamento distal',
    'Uberlândia',
    'saúde integrativa',
    'dor nas costas',
    'postura'
  ],
  authors: [{ name: 'Clínica Sattva Quiropraxia - Beto Goulart' }],
  alternates: {
    canonical: '/'
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
    url: '/',
    siteName: 'Clínica Sattva Quiropraxia',
    title: 'Clínica Sattva Quiropraxia',
    description:
      'Quiropraxia, agulhamento distal e técnicas integrativas em Uberlândia/MG.',
    images: [
      {
        url: '/imagens/logo.png',
        width: 1200,
        height: 630,
        alt: 'Clínica Sattva Quiropraxia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Sattva Quiropraxia',
    description:
      'Quiropraxia, agulhamento distal e técnicas integrativas em Uberlândia/MG.',
    images: ['/imagens/logo.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className={`${montserrat.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
