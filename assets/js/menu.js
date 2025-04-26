document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 