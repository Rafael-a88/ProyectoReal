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


// Funcion para la busqueda de cursos en el inicio de la pagina.
document.querySelector('.search__input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let searchTerm = this.value.toLowerCase();
            let url = '';
            switch(searchTerm) {
                case 'html':
                case 'css':
                    url = '/Lenguajes/Html y Css.html';
                    break;
                case 'java':
                    url = '/Lenguajes/Java.html';
                    break;
                case 'javascript':
                    url = '/Lenguajes/Javascript.html';
                    break;
                case 'python':
                    url = '/Lenguajes/Python.html';
                    break;
                default:
                    alert('Aún no tenemos cursos para ese lenguaje. Proximamente...');
            }
            if (url !== '') {
                window.open(url, '_blank');
            }
        }
    });

 // Selecciona todos los elementos li que tienen un submenú
    var menuItems = document.querySelectorAll('nav ul li');

    // Itera sobre cada elemento y agrega un evento de clic
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            // Busca el submenú dentro del elemento li actual
            var subMenu = menuItem.querySelector('ul');

            // Verifica si el submenú está visible
            if (subMenu.style.visibility === 'hidden' || subMenu.style.visibility === '') {
                // Oculta todos los submenús antes de mostrar el actual
                document.querySelectorAll('nav ul li ul').forEach(function(menu) {
                    menu.style.visibility = 'hidden';
                });
                // Muestra el submenú actual
                subMenu.style.visibility = 'visible';
                subMenu.style.opacity = 1;
            } else {
                // Oculta el submenú si ya está visible
                subMenu.style.visibility = 'hidden';
                subMenu.style.opacity = 0;
            }
        });
    });