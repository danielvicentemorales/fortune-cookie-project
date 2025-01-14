const messages = [
    "¡Pasa la llave!",
    "Hoy es tu día de suerte",
    "Sigue adelante con confianza",
    "Un nuevo comienzo está cerca",
    "El éxito está a tu alcance"
];

function openCookie() {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const paper = document.querySelector('.paper');
    const fortuneText = document.getElementById('fortuneText');
    const sound = document.getElementById('crackSound');

    // Reinicia posiciones
    left.style.transform = "translateX(0) rotate(0)";
    right.style.transform = "translateX(0) rotate(0)";
    paper.style.opacity = "0";
    fortuneText.textContent = ""; // Limpia el texto anterior

    setTimeout(() => {
        // Animar apertura horizontal
        left.style.transform = "translateX(-120px)";
        right.style.transform = "translateX(120px)";
        paper.style.opacity = "1";

        // Reproducir sonido
        sound.play();

        // Generar mensaje aleatorio
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(() => {
            fortuneText.textContent = randomMessage;

            // Lanza confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1000); // Tiempo de espera para mostrar mensaje
    }, 300); // Pequeño retraso antes de animación
}
