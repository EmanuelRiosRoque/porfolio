document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // 🔹 Refrescar ScrollTrigger después de cargar imágenes
    window.addEventListener("load", function() {
        ScrollTrigger.refresh();
    });

    // 🔹 Animación del Hero Section
    gsap.to("#glass-text", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    gsap.to("#hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 });

    // 🔹 Animaciones de las Secciones
    gsap.utils.toArray(".scroll-section").forEach((section, index, sections) => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50, scale: 0.98 }, 
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 1, 
                ease: "power2.out", 
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Se activa al 80% de la pantalla
                    end: "top 10%",   // Se mantiene hasta el 10%
                    toggleActions: "play none none reverse", // Se invierte cuando sales de la sección
                    scrub: true,  // Hace que la animación siga el scroll
                }
            }
        );
    });

    // 🔹 Animación de las imágenes del portafolio en secuencia
    gsap.utils.toArray(".portfolio-item").forEach((item, index) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }, 
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                filter: "blur(0px)", 
                duration: 0.8,  
                ease: "expo.out",
                stagger: 0.1,  // Menos retraso entre imágenes
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                    scrub: true, // Hace que las imágenes aparezcan gradualmente
                }
            }
        );
    });

});