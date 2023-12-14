$(document).ready(function() {
    $('#signupForm').submit(function(e) {
        e.preventDefault();
        
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        
        if (password !== confirmPassword) {
            $('#response').html('Las contraseñas no coinciden.');
            return;
        }
        
        $.ajax({
            type: 'POST',
            url: 'signup.php',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                $('#response').html(response);
            }
        });
    });
});

$(document).ready(function() {
    $('#signinButton').click(function() {
        window.location.href = 'Signin.html';
    });
});