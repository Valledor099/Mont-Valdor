window.addEventListener('scroll', function() {
    const logoContainer = document.querySelector('.img');
    
    if (!logoContainer) {
        console.log('No se encontró logoContainer');
        return;
    }
    
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // El logo completa su ciclo más cerca del final (80% del scroll total)
    const maxScrollPoint = documentHeight * 0.80;
    const scrollProgress = Math.min(1, scrollPosition / maxScrollPoint);
    
    let opacity, scale, blur;
    
    // Primera mitad del scroll (0 a 0.5): el logo se va para atrás
    if (scrollProgress < 0.5) {
        const progress = scrollProgress * 2;
        opacity = Math.max(0.15, 1 - progress * 0.85);
        scale = Math.max(0.75, 1 - progress * 0.25);
        blur = Math.min(5, progress * 5);
    } 
    // Segunda mitad del scroll (0.5 a 1): el logo vuelve al frente
    else {
        const progress = (scrollProgress - 0.5) * 2;
        opacity = Math.min(1, 0.15 + progress * 0.85);
        scale = Math.min(1, 0.75 + progress * 0.25);
        blur = Math.max(0, 5 - progress * 5);
    }
    
    // Aplicar transformaciones
    logoContainer.style.opacity = opacity;
    logoContainer.style.transform = `scale(${scale})`;
    logoContainer.style.filter = `blur(${blur}px)`;
});