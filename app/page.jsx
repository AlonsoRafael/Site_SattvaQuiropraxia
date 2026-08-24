import HomeClient from '../components/HomeClient';

export const metadata = {
  title: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
  description:
    'Especialista em alívio da dor na coluna, nervo ciático e inflamações com Quiropraxia, Acupuntura Distal e Magnetoterapia em Uberlândia/MG. Agende sua consulta com Beto Goulart!',
  alternates: {
    canonical: 'https://www.sattvaquiropraxia.site/'
  },
  openGraph: {
    title: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
    description:
      'Recupere sua mobilidade e viva sem dor. Quiropraxia, Acupuntura Distal e Magnetoterapia eficazes e seguras em Uberlândia com Beto Goulart. Agende agora!',
    url: 'https://www.sattvaquiropraxia.site/',
    images: ['/imagens/logo.png']
  },
  twitter: {
    title: 'Quiropraxia e Alívio da Dor em Uberlândia | Sattva Saúde Integrativa',
    description:
      'Recupere sua mobilidade e viva sem dor. Quiropraxia, Acupuntura Distal e Magnetoterapia eficazes e seguras em Uberlândia com Beto Goulart.',
    images: ['/imagens/logo.png']
  }
};

export default function HomePage() {
  return <HomeClient />;
}
