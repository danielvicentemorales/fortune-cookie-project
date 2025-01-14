const messages = [
    "¡Pasa la llave!",
    "Hoy es tu día de suerte",
    "Sigue adelante con confianza",
    "Un nuevo comienzo está cerca",
    "El éxito está a tu alcance"
  ];
  
  function showMessage() {
    const message = document.getElementById('message');
    const sound = document.getElementById('crackSound');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Reproduce el sonido
    sound.play();

    // Muestra el mensaje
    message.textContent = randomMessage;
    message.style.display = 'block';

    // Lanza confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
