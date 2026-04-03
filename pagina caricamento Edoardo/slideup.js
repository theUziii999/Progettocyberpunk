// 1. Memorizza i riferimenti agli elementi HTML in due variabili
const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('intro-overlay');

// 2. Mette il bottone in "ascolto" per un evento di tipo 'click'
enterBtn.addEventListener('click', () => {
    
    // Al click, aggiunge la classe CSS che attiva la transizione verso l'alto
    overlay.classList.add('slide-up');
    
    // Rimuove completamente l'overlay dal documento 
    // dopo che l'animazione è finita (1000 millisecondi = 1 secondo).
    // Questo evita che l'overlay invisibile interferisca con i click sul vero sito sottostante.
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000); 
    
});