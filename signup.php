<?php
// Conexión a MongoDB
require 'vendor/autoload.php';
$mongoClient = (new MongoDB\Client)->Integracion->Usuarios;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Verificar si el usuario ya existe
    $existingUser = $mongoClient->findOne(['usuario' => $username]);
    if ($existingUser) {
        echo 'El nombre de usuario ya está en uso.';
    } else {
        // Insertar el nuevo usuario en MongoDB
        $mongoClient->insertOne([
            'usuario' => $username,
            'password' => $password
        ]);
        echo 'Registro exitoso. ¡Bienvenido, ' . $username . '!';
    }
}
?>