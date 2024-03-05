$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
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

        alert('Nombre: ' + nombre +'\nApellidos: ' + apellidos + '\nEmail: ' + emailSignup + '\nPassword: ' + passwordSignup );

        // Cambiar a la pestaña de Log In
        document.querySelector('#login').style.display = 'block';
        document.querySelector('#signup').style.display = 'none';
        
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