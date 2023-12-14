$(document).ready(function() {
    $('#signinForm').submit(function(e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'signin.php',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                try {
                    var jsonData = JSON.parse(response);
                    
                    if (jsonData.status == 'ok') {
                        // Redirigir a la página de bienvenida con el nombre de usuario en la URL
                        window.location.href = 'bienvenido.php?username=' + jsonData.usuario;
                    } else {
                        // Muestra un mensaje de error y borra el contenido del password
                        $('#response').html('El usuario o la contraseña son incorrectas.');
                        $('#password').val('');
                    }
                } catch (error) {
                    // Si la respuesta no es JSON, intenta redirigir directamente
                    window.location.href = '/bienvenido.php';
                }
            }
        });
    });
});

$(document).ready(function() {
    $('#signupButton').click(function() {
        window.location.href = 'Signup.html';
    });
});