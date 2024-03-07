// Bienvenida al curso
document.querySelectorAll('.conImagen img').forEach(function(img) {
    img.addEventListener('click', function() {
        alert('Bienvenido al curso:\n' + this.nextElementSibling.textContent.trim());
    });
});