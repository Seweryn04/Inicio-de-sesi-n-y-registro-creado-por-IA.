<?php
// Conexión a MongoDB (similar al ejemplo anterior)
require 'vendor/autoload.php';
$mongoClient = (new MongoDB\Client)->Integracion->Usuarios;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Buscar al usuario en MongoDB
    $existingUser = $mongoClient->findOne(['usuario' => $username]);
    
    if ($existingUser && password_verify($password, $existingUser['password'])) {
        // Usuario y contraseña correctos
        session_start();
        $_SESSION['username'] = $username;
        header('Location: bienvenido.php'); // Redirigir a la página de bienvenida
        exit();
    } else {
        // Usuario o contraseña incorrectos
        echo json_encode(['status' => 'ko']);
    }
}
?>