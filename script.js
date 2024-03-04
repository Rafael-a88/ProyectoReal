window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var footer = document.getElementById("myFooter");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        footer.style.display = "block"; // Muestra el footer al hacer scroll
    } else {
        footer.style.display = "none"; // Oculta el footer al volver arriba
    }
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var footer = document.getElementById("myFooter");
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollPosition = window.scrollY;

    if (scrollHeight - (scrollPosition + clientHeight) < 30) {
        footer.style.display = "block"; // Muestra el footer al hacer scroll hacia la parte inferior de la página
    } else {
        footer.style.display = "none"; // Oculta el footer al hacer scroll hacia arriba
    }
}

document.getElementById("subscribeBtn").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
    if (email.trim() !== "") {
        alert("Te has suscrito a nuestra revista con el correo: " + email + ". ¡Muchas gracias!");
    } else {
        alert("Por favor, introduce una dirección de correo válida.");
    }
});