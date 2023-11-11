// Obtém o elemento do texto rolável
const scrollingText = document.getElementById('scrollingText');

// Adiciona um evento de rolagem à janela
window.addEventListener('scroll', function() {
    // Obtém o valor de rolagem vertical da janela
    const scrolled = window.scrollY;

    // Aplica a transformação de translação apenas no eixo Y para rolar somente o texto
    scrollingText.style.transform = `translateY(${scrolled}px)`;
});
