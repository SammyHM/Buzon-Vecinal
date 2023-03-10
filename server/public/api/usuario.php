<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $jwt = $data['jwt'];
    $mail = $data['mail'];

    $respuesta = array();

    $decodedJwt = JWT::decode($jwt);
    if ($decodedJwt && $decodedJwt[1]['role'] === 'admin') { 
        BaseDatos::SetConexion();
        $respuesta = BaseDatos::Get("id_vecino, correo, contrasena, imagen", "vecinos", "correo = '$mail'")[0];
    }
    
    echo json_encode($respuesta);
?>