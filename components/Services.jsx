export default function Services({ services }) {
  return (
    <section className="section-padded bg-beige-stylized" id="servicos">
      <div className="container fade-in">
        <h2 className="section-title text-center">Como posso ajudar você</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div
                className="card-icon"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#d3ac6b',
                  WebkitMaskImage: `url(${service.icon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${service.icon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  display: 'inline-block'
                }}
                role="img"
                aria-label={service.alt}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
