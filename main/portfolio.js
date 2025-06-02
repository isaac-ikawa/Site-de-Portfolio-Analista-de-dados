let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    // Mostra imediatamente a navbar no topo
    if (window.scrollY === 0) {
        navbar.style.transition = 'none'; // Remove transição ao exibir no topo
        navbar.style.top = '0'; // Mostra a navbar
        setTimeout(() => {
            navbar.style.transition = 'top 0.3s ease-in-out'; // Restaura transição para o restante
        }, 10); // Pequeno delay para garantir o efeito no restante
    } else {
        navbar.style.top = '-70px'; // Esconde ao rolar
    }

    lastScrollY = window.scrollY;
});
