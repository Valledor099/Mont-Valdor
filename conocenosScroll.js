window.addEventListener('scroll', function() {
    const logoContainer = document.querySelector('.img');
    
    if (!logoContainer) {
        console.log('No se encontró logoContainer');
        return;
    }
    
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // El logo completa su ciclo más cerca del final (80% del scroll total)
    const maxScrollPoint = documentHeight * 0.90;
    const scrollProgress = Math.min(1, scrollPosition / maxScrollPoint);
    
    let opacity, scale, blur;
    
    // El logo permanece visible más tiempo (hasta el 20% del scroll)
    if (scrollProgress < 0.3) {
        // Logo permanece completamente visible
        opacity = 1;
        scale = 1;
        blur = 0;
    }
    // Transición del logo yendo hacia atrás (20% a 70%)
    else if (scrollProgress < 1) {
        const progress = (scrollProgress - 0.2) / 0.5; // Normalizar entre 0 y 1
        opacity = Math.max(0.15, 1 - progress * 0.85);
        scale = Math.max(0.75, 1 - progress * 0.25);
        blur = Math.min(5, progress * 5);
    } 
    // Segunda mitad del scroll (0.7 a 1): el logo vuelve al frente
    else {
        const progress = (scrollProgress - 0.8) / 0.2; // Normalizar entre 0 y 1
        opacity = Math.min(1, 0.30 + progress * 0.85);
        scale = Math.min(1, 0.5 + progress * 0.25);
        blur = Math.max(0, 6 - progress * 6);
    }
    
    // Aplicar transformaciones
    logoContainer.style.opacity = opacity;
    logoContainer.style.transform = `scale(${scale})`;
    logoContainer.style.filter = `blur(${blur}px)`;
});