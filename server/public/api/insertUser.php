<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $jwt = $data['jwt'];
    $user = $data['user'];
    $password = $data['password'];
    $image = $data['image'];

    $respuesta = array("result" => false);
    
    $decodedJwt = JWT::decode($jwt);
    if ($decodedJwt && $decodedJwt[1]['role'] === 'admin') {
        BaseDatos::SetConexion();

        $vecino = BaseDatos::Get("id_vecino", "vecinos", "correo = '$user'");
        $count = count($vecino);
        if ($count == 0) {
            $respuesta['result'] = BaseDatos::InsertColumns("vecinos", "correo, contrasena, imagen", "'$user', '$password', '$image'");
        }
    }

    echo json_encode($respuesta);
?>