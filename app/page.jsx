import HomeClient from '../components/HomeClient';

export const metadata = {
  title: 'Sattva Saúde Integrativa - Alinhando sua saúde com equilíbrio',
  description:
    'Av. Nicomedes Alves dos Santos, 1500 - Morada da Colina, Uberlândia/MG. Ajudo pessoas com dores e inflamações a recuperarem a qualidade de vida com quiropraxia, agulhamento distal e técnicas integrativas eficazes, rápidas e seguras.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Sattva Saúde Integrativa - Alinhando sua saúde com equilíbrio',
    description:
      'Av. Nicomedes Alves dos Santos, 1500 - Morada da Colina, Uberlândia/MG. Ajudo pessoas com dores e inflamações a recuperarem a qualidade de vida com quiropraxia, agulhamento distal e técnicas integrativas eficazes.',
    url: '/',
    images: ['/imagens/logo.png']
  },
  twitter: {
    title: 'Sattva Saúde Integrativa - Alinhando sua saúde com equilíbrio',
    description:
      'Av. Nicomedes Alves dos Santos, 1500 - Morada da Colina, Uberlândia/MG. Ajudo pessoas com dores e inflamações a recuperarem a qualidade de vida com quiropraxia, agulhamento distal e técnicas integrativas eficazes.',
    images: ['/imagens/logo.png']
  }
};

export default function HomePage() {
  return <HomeClient />;
}
