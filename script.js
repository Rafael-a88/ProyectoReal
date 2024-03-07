window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var footer = document.getElementById("myFooter");
    var scrollPosition = window.scrollY ||  document.documentElement.scrollTop;

    if ((window.innerHeight + scrollPosition) >= document.body.offsetHeight) {
        footer.style.display = "block"; // Muestra el footer al llegar al final de la página
    } else {
        footer.style.display = "none"; // Oculta el footer en otras posiciones de scroll
    }
}

window.onscroll = function() {
    scrollFunction();
};

// Funcion para que me lleve al final de la pagina y me muestre el footer, cuando pulse en Contacto
document.getElementById("contacto").addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight);
});

// Bienvenida al curso
document.querySelectorAll('.conImagen img').forEach(function(img) {
    img.addEventListener('click', function() {
        alert('Bienvenido al curso:\n' + this.nextElementSibling.textContent.trim());
    });
});

// Función para un alert, cuando te registras a la revista.
document.getElementById("subscribeBtn").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
    if (email.trim() !== "") {
        alert("Te has suscrito a nuestra revista con el correo: " + email + ". ¡Muchas gracias!");
    } else {
        alert("Por favor, introduce una dirección de correo válida.");
    }
});

