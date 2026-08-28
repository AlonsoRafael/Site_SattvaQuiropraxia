"use client";

import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    name: "Aline Silva",
    initial: "A",
    color: "#33691e",
    date: "1 mês atrás",
    text: "Quero expressar minha profunda admiração pelo seu trabalho. Um profissional com excelência técnica, muita sensibilidade, dedicação e propósito. Seu serviço não é apenas de altíssimo nível — ele carrega uma energia diferente, uma presença que transmite confiança, cuidado e verdade.\n\nÉ nítida a sua evolução, não só profissional, mas também espiritual. Isso se reflete em cada detalhe, na forma como você conduz, se comunica e entrega além do esperado. Você não apenas realiza um serviço, você impacta, inspira e eleva quem tem a oportunidade de estar próximo.\n\nGratidão por exercer sua missão com tanta luz, consciência e maestria. Que sua jornada continue sendo guiada por essa força incrível que você transmite.",
    stars: 5,
  },
  {
    name: "Amadeu Garcia",
    initial: "A",
    color: "#2196F3",
    date: "2 meses atrás",
    text: "Nunca fui tão bem atendido por um profissional da saúde deste calibre. Recomendo fortemente àqueles de sensibilidade aguçada e que saiba contribuir pelo seu próprio bem e auxílio deste profissional.",
    stars: 5,
    image: "/imagens/google/amadeu.webp",
  },
  {
    name: "Ana Márcia Almeida",
    initial: "A",
    color: "#4CAF50",
    date: "2 meses atrás",
    text: "Atendimento humanizado, profissional extremamente ético e competente. Recomendo!",
    stars: 5,
    image: "/imagens/google/ana_marcia.webp",
  },
  {
    name: "Dr Uilter Goulart",
    initial: "D",
    color: "#9c27b0",
    date: "recentemente",
    text: "É impossível não reconhecer e celebrar o trabalho do profissional Beto Goulart, da Sattva Saúde Integrativa. Seu atendimento é marcado por acolhimento, humanidade e excelência, conquistando não apenas a confiança, mas também o carinho de todos que têm o privilégio de serem cuidados por ele.\n\nBeto é um profissional que vai além da técnica: ele transmite serenidade, escuta com atenção e trata cada paciente como único. Sua dedicação é tão especial que se estende à minha família inteira, sempre com carinho, respeito e profissionalismo.\n\nNão posso deixar de destacar o novo espaço onde ele atende: um ambiente encantador, lindo, calmo e maravilhoso, que reflete sua essência e torna cada consulta uma experiência transformadora.\n\nEssa homenagem é um reconhecimento sincero ao valor de um profissional que une ciência e humanidade, técnica e coração, e que inspira confiança e gratidão em todos que cruzam seu caminho.",
    stars: 5,
    image: "/imagens/google/uilter.webp",
  },
  {
    name: "Isabella Borges",
    initial: "I",
    color: "#8d6e63",
    date: "3 meses atrás",
    text: "Excelente profissional, que une técnica, sensibilidade e cuidado genuíno. Transmite confiança desde o primeiro atendimento e demonstra um olhar atento às necessidades de cada paciente.\n\nRecomendo com admiração e segurança.",
    stars: 5,
  },
  {
    name: "Léia Dornelas",
    initial: "L",
    color: "#FF9800",
    date: "3 meses atrás",
    text: "Beto é um profissional primoroso, competente, com foco total na saúde do paciente. Estudioso, conectado com o Ser Supremo, vê além do físico e cuida de forma integral. Sempre entrega o melhor de si. Você sai restaurado de seu atendimento. Gratidão, Beto.",
    stars: 5,
    image: "/imagens/google/leia.webp",
  },
  {
    name: "Losi Sousa de Figueiredo",
    initial: "L",
    color: "#ec407a",
    date: "4 meses atrás",
    text: "Sofrendo de muita dor no joelho, tive a felicidade, através de uma amiga, conhecer o grande profissional, Beto Goulart.\nNo primeiro atendimento, já senti uma melhora considerável, práticamente, sem dor.\nAgradeço ao Beto pelo trabalho que ele realiza, com muita dedicação!\nQue Deus o abençoe, ricamente!",
    stars: 5,
  },
  {
    name: "Márcia Mendes",
    initial: "M",
    color: "#E64A19",
    date: "4 meses atrás",
    text: "Existe um lugar de socorro para o corpo e pra alma. O Beto é um curador de coração aberto para o bem. Amo ser atendida por ele neste espaço.",
    stars: 5,
    image: "/imagens/google/marcia.webp",
  },
  {
    name: "Patricia Azevedo Mendes",
    initial: "P",
    color: "#f4511e",
    date: "5 meses atrás",
    text: "Profissional excepcional! Me senti acolhida, ouvida, e além de me oferecer um alívio da dor física, através da quiropraxia e acupuntura, me trouxe um conforto mental, emocional e até espiritual. O Beto tem uma grande bagagem de ferramentas que me atendeu em todos os aspéctos.",
    stars: 5,
  },
  {
    name: "Pedro Vicente",
    initial: "P",
    color: "#1e22f4ff",
    date: "6 meses atrás",
    text: "Recebi excelentes atendimentos , com excelentes resultados . Beto é um profissional não só muito competente , mas uma pessoa iluminada , sensível e humana!! Me ajudou muito com minhas dores .\nSuper recomendado!!!!",
    stars: 5,
  },
  {
    name: "Ramon Zardo de Souza",
    initial: "R",
    color: "#78909c",
    date: "3 dias atrás",
    text: "Fui recebido de maneira profissional...e me senti amparado tanto profissionalmente qto emocionalmente em um momento de dor extrema.....tal envolvimento e atendimento cordial abriu espaço para a cura e eliminação das dores....experiência fantástica....obrigado a todos.",
    stars: 5,
  },
  {
    name: "Renato Ribeiro",
    initial: "R",
    color: "#bf360c",
    date: "3 dias atrás",
    text: "Sou médico e fui muito bem atendido pelo Beto Goulart, excelente Quiropata. Sua consulta é detalhada e faz as manobras físicas com extremo cuidado. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Rondon Hikeda",
    initial: "R",
    color: "#004d40",
    date: "3 dias atrás",
    text: "Excelente atendimento! Profissionalismo que abrange o paciente integral.\nAtenção em todos os aspectos : físico e psíquico.\nMuito satisfeito com o atendimento.",
    stars: 5,
  },
  {
    name: "Roseliane Simão",
    initial: "R",
    color: "#0097a7",
    date: "um dia atrás",
    text: "Sensibilidade e profissionalismo são marcas registradas em seus atendimentos.\n\nA escuta atenta, avaliação inicial detalhada, explicação didática e o acompanhamento clínico mostram que, muito mais que um ajuste técnico, é oferecido um cuidado que vem da alma.\n\nMe encantou sentir que o zelo não termina quando a sessão acaba. O acompanhamento no pós-atendimento revela um comprometimento raro com o paciente.\n\nSenti acolhimento e competência; encontrei aqui um refúgio para o meu bem-estar. Recomendo!!!",
    stars: 5,
  },
  {
    name: "Victor Alves",
    initial: "V",
    color: "#bf360c",
    date: "3 dias atrás",
    text: "Atendimento impecável e profissionalismo de alto nível. Além de ser uma pessoa muito amigável, Beto tem um domínio incrível da quiropraxia e acupuntura. Me senti muito seguro e recomendo para todos que precisam tratar dores com profissional de confiança!",
    stars: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackHeight, setTrackHeight] = useState('auto');
  const [expandedReviews, setExpandedReviews] = useState({});
  const trackRef = useRef(null);

  // Touch event states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const updateHeight = () => {
    if (trackRef.current && trackRef.current.children[currentIndex]) {
      const activeSlide = trackRef.current.children[currentIndex];
      setTrackHeight(`${activeSlide.offsetHeight}px`);
    }
  };

  useEffect(() => {
    // Timeout para garantir que o render e as fontes/margins foram aplicados
    const timer = setTimeout(updateHeight, 50);
    window.addEventListener('resize', updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, [currentIndex]);

  const totalSlides = reviews.length + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section className="section-padded bg-minimal" id="avaliacoes">
      <div className="container fade-in">
        <h2 className="section-title text-center">O que meus pacientes dizem?</h2>

        <div
          className="review-carousel-wrapper"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Carrossel de depoimentos de pacientes"
        >
          <button
            type="button"
            className="review-arrow left"
            onClick={prevSlide}
            aria-label="Avaliação Anterior"
          >
            &#10094;
          </button>

          <div 
            className="review-carousel-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="review-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                height: trackHeight
              }}
            >
              {reviews.map((review, index) => (
                <div className="review-slide" key={index}>
                  <div className="google-review-card">
                    <div className="google-review-header">
                      <div className="google-avatar" style={{ backgroundColor: review.image ? 'transparent' : review.color }}>
                        {review.image ? (
                          <img
                            src={review.image}
                            alt={`Foto de ${review.name}`}
                            loading="lazy"
                            decoding="async"
                            width="40"
                            height="40"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                          />
                        ) : (
                          review.initial
                        )}
                      </div>
                      <div className="google-user-info">
                        <h3 className="google-user-name">{review.name}</h3>
                      </div>

                      {/* Ícone do Google (G) */}
                      <div className="google-icon">
                        <a
                          href="https://www.google.com/search?q=sattva+sa%C3%BAde+integrativa&oq=sa&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MggIAhBFGCcYOzIGCAMQRRg5MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNjQwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#mpd=~12877640729693052133/customers/reviews"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver mais avaliações no Google"
                          style={{ display: 'block' }}
                        >
                          <svg viewBox="0 0 48 48" width="24px" height="24px" aria-hidden="true">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="google-review-stars">
                      {'★'.repeat(review.stars)}
                    </div>

                    <div className="google-review-body">
                      {(() => {
                        const isExpanded = expandedReviews[index];
                        const maxLength = 260;
                        const text = review.text;
                        
                        // Dá uma tolerância de 50 caracteres para evitar o "Ver mais" para uma ou duas palavras
                        const shouldTruncate = text.length > maxLength + 50;
                        
                        // Corta no último espaço antes do limite para não quebrar palavras no meio
                        const truncatedText = shouldTruncate 
                          ? text.slice(0, text.lastIndexOf(' ', maxLength)) + '...'
                          : text;

                        return (
                          <>
                            <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                              {shouldTruncate && !isExpanded
                                ? truncatedText
                                : text}
                            </p>
                            {shouldTruncate && (
                              <button 
                                type="button"
                                onClick={() => {
                                  setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }));
                                  setTimeout(updateHeight, 50);
                                }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#555',
                                  cursor: 'pointer',
                                  padding: 0,
                                  marginTop: '8px',
                                  fontSize: '0.9rem',
                                  fontWeight: 'bold',
                                  textDecoration: 'underline'
                                }}
                              >
                                {isExpanded ? 'Ver menos' : 'Ver mais'}
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              ))}

              {/* Último Slide: Ver mais avaliações */}
              <div className="review-slide" key="more">
                <div className="google-review-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '200px' }}>
                  <h3 style={{ marginBottom: '20px', color: '#202124' }}>Quer ver mais?</h3>
                  <a
                    href="https://www.google.com/search?q=sattva+sa%C3%BAde+integrativa&oq=sa&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MggIAhBFGCcYOzIGCAMQRRg5MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNjQwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#mpd=~12877640729693052133/customers/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ backgroundColor: '#d3ac6b', borderColor: '#d3ac6b', color: '#070707ff' }}
                  >
                    Ver todas as avaliações no Google
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="review-arrow right"
            onClick={nextSlide}
            aria-label="Próxima Avaliação"
          >
            &#10095;
          </button>
        </div>

        {/* Bolinhas de Navegação */}
        <div className="review-dots" style={{ flexWrap: 'wrap' }} role="tablist" aria-label="Navegação dos depoimentos">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              type="button"
              key={index}
              role="tab"
              aria-selected={currentIndex === index}
              className={`review-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
