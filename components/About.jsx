export default function About() {
  return (
    <section className="section-padded" id="sobre">
      <div className="container content-section fade-in">
        <div className="image-content">
          <img
            src="/imagens/beto.webp"
            alt="Foto do Profissional Beto Goulart"
            loading="lazy"
            decoding="async"
            width="600"
            height="750"
          />
        </div>
        <div className="text-content" style={{ fontSize: '18px', lineHeight: 1.6 }}>
          <p>
            Sou o Beto Goulart, um profissional comprometido com a restauração do
            bem-estar e do movimento.
          </p>
          <p>
            Agulhamento Distal, Acupuntura, Quiropraxia. Saúde Integrativa
            BioFAO e Neurociência são as especialidades em saude integrativa que
            me possibilitam oferecer um tratamento eficaz, com rápido alívio da
            dor e melhora da mobilidade, favorecendo uma vida mais saudável.
          </p>
          <p>
            O equilíbrio é a chave para uma vida plena, de harmonia e sem dor.
            Vamos juntos reconhecer, desenvolver e manter este ponto de
            equilíbrio.
          </p>
        </div>
      </div>
    </section>
  );
}
