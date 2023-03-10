<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $user = $data['user'];
    $password = $data['password'];

    BaseDatos::SetConexion();
    $respuesta = BaseDatos::Get("*", "administradores", "usuario = '$user' AND contrasena = '$password'");
    if(count($respuesta) === 1) {
        $json = array('jwt' => JWT::encode(array("usuario" => $respuesta[0]['usuario'], 'role' => "admin")));
    } else {
        $json = array('jwt' => false);
    }

    echo json_encode($json);
?>