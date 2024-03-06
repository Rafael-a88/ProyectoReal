// Este bloque de código maneja eventos de teclado y foco en los campos de entrada (input, textarea) en un formulario
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        // Si el evento es 'keyup'
        if (e.type === 'keyup') {
            // Si el campo está vacio, se quitan las clases 'active' y 'highlight' de la  etiqueta
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            // Si el campo tiene contenido, se agregan las clases 'active' y 'highlight' de la etiqueta
            label.addClass('active highlight');
          }
          // Si el evento es blur
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
            }
        }
    });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
});



document.addEventListener('DOMContentLoaded', function() {
    var emailSignup;
    var passwordSignup;
    var nombre;
    var apellidos;

  document.querySelector('#signup button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
  
        emailSignup = document.querySelector('#signup input[type="email"]').value;
        passwordSignup = document.querySelector('#signup input[type="password"]').value;
        nombre = document.querySelector('#signup input[placeholder="Nombre"]').value;
        apellidos = document.querySelector('#signup input[placeholder="Apellidos"]').value;
  
        // Validar que la dirección de email contenga el símbolo "@"
            if (!emailSignup.includes('@')) {
                alert('La dirección de email debe contener el símbolo "@"');
                return;
            }

        alert('Nombre: ' + nombre +'\nApellidos: ' + apellidos + '\nEmail: ' + emailSignup + '\nPassword: ' + passwordSignup );
  
        // Cambiar a la pestaña de Log In
        document.querySelector('#login').style.display = 'block';
        document.querySelector('#signup').style.display = 'none';
  
        // Añadimos un id a Log in para poder interactuar con él.
        var loginTab = document.getElementById("login2");

        // Recorremos un array para detectar que elemento tiene el foco active
        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        }

        // Agregamos la clase "active" al elemento "loginTab"
        loginTab.classList.add("active");
    }); 
    
        

    document.querySelector('#login button').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        var emailLogin = document.querySelector('#login input[type="email"]').value;
        var passwordLogin = document.querySelector('#login input[type="password"]').value;

        if (emailLogin === emailSignup && passwordLogin === passwordSignup) {
            alert('Acceso Correcto');
            // Redirigir a la página deseada
            window.location.href = '../inicio.html';
        } else if (emailLogin !== emailSignup && passwordLogin === passwordSignup) {
            alert('Email incorrecto');
        } else if (emailLogin === emailSignup && passwordLogin !== passwordSignup) {
            alert('Contraseña incorrecta');
        } else {
            alert('Correo y contraseña incorrectos');
        }
    });
});