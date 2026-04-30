export default function TherapiesInfo() {
  return (
    <section className="section-padded" id="terapias">
      <div className="container fade-in">
        <h2 className="section-title text-center">Minhas Especialidades</h2>
        <div className="services-grid">
          <div className="service-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--color-black-matte)' }}>Acupuntura Distal</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text)' }}>
              A Acupuntura Distal é uma técnica avançada que utiliza pontos distantes do local da dor (como braços e pernas) para tratar a queixa principal. É um método altamente eficaz que proporciona alívio rápido da dor e inflamação, restaurando o fluxo de energia e o equilíbrio do corpo sem a necessidade de agulhar diretamente a área dolorida.
            </p>
          </div>
          <div className="service-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--color-black-matte)' }}>Quiropraxia</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text)' }}>
              A Quiropraxia é uma área da saúde dedicada ao diagnóstico, tratamento e prevenção de problemas no sistema neuro-músculo-esquelético. Através de ajustes articulares precisos, o tratamento remove bloqueios, melhora a mobilidade, corrige a postura e permite que o sistema nervoso funcione perfeitamente, garantindo alívio de tensões sem medicamentos.
            </p>
          </div>
          <div className="service-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--color-black-matte)' }}>Magnetoterapia</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--color-text)' }}>
              A Magnetoterapia é uma prática terapêutica não invasiva que utiliza a aplicação de campos magnéticos (ímãs) para fins curativos. Os ímãs estimulam a circulação sanguínea, auxiliam na rápida regeneração celular e ajudam na redução de dores crônicas e processos inflamatórios, complementando o tratamento de forma natural e segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
