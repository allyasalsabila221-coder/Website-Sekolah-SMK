// assets/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Untuk form kontak
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih, pesan Anda telah terkirim (simulasi).');
            contactForm.reset();
        });
    }
});