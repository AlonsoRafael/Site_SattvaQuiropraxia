document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA O MENU HAMBÚRGUER (MOBILE) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- LÓGICA PARA ANIMAÇÃO DE FADE-IN AO ROLAR ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // usa a viewport como área de observação
        rootMargin: '0px',
        threshold: 0.1 // o elemento é considerado visível quando 10% dele está na tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // para a observação após a animação
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});

// --- LÓGICA PARA O FAQ (ACORDEÃO) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Fecha todos os outros itens abertos
            const openItem = document.querySelector('.faq-item.active');
            if (openItem && openItem !== item) {
                openItem.classList.remove('active');
            }

            // Abre ou fecha o item clicado
            item.classList.toggle('active');
        });
    });

   // --- LÓGICA PARA PARAR O BOTÃO FLUTUANTE ANTES DO RODAPÉ ---
     document.addEventListener('DOMContentLoaded', () => {
        const floatingButton = document.querySelector('.whatsapp-flutuante');
        const footer = document.querySelector('.footer');

        if (!floatingButton || !footer) {
            return; // Garante que o código não quebre se os elementos não existirem
        }

        const observer = new IntersectionObserver( (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Se o rodapé está visível, adiciona a classe para parar
                    floatingButton.classList.add('parar-flutuacao');
                    // E posiciona o botão logo acima do rodapé
                    const footerHeight = footer.offsetHeight;
                    floatingButton.style.bottom = `${footerHeight + 20}px`; // Altura do rodapé + 20px de margem
                } else {
                    // Se o rodapé não está visível, remove a classe e volta ao normal
                    floatingButton.classList.remove('parar-flutuacao');
                    floatingButton.style.bottom = '20px'; // Posição fixa original
                }
            });
        }, { 
            rootMargin: '0px', 
            threshold: 0.1 // O gatilho dispara quando 10% do rodapé estiver visível
        });

        // Inicia a observação do rodapé
        observer.observe(footer);
    });

    // --- LÓGICA PARA O CARROSSEL DE FOTOS ---
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicators = document.querySelectorAll('.indicator-dot');
    
    if (!carouselContainer) return; // Não executa o código se o carrossel não existir na página

    let currentIndex = 0;
    const totalItems = items.length;
    let slideInterval;

    // Função para mostrar o slide desejado
    function showSlide(index) {
        // Ajusta o índice para navegação infinita
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Atualiza o indicador ativo
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    // Função para voltar para o slide anterior
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    
    // Inicia o carrossel automático
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }

    // Para o carrossel automático
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Reinicia o carrossel (útil quando o usuário interage)
    function resetSlideShow() {
        stopSlideShow();
        startSlideShow();
    }

    // Adiciona eventos de clique aos botões
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetSlideShow();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetSlideShow();
    });

    // Adiciona eventos de clique aos indicadores
    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetSlideShow();
        });
    });

    // Inicia o slideshow quando a página carrega
    startSlideShow();
});