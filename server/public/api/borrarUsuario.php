<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $jwt = $data['jwt'];
    $mail = $data['mail'];

    $respuesta = array('result' => false);

    $decodedJwt = JWT::decode($jwt);
    if ($decodedJwt && $decodedJwt[1]['role'] === 'admin') {
        BaseDatos::SetConexion();

        $vecino = BaseDatos::Get("id_vecino", "vecinos", "correo = '$mail'");
        if (count($vecino) === 1) {
            $id = $vecino[0]["id_vecino"];
            BaseDatos::Delete("buzones", "id_vecino = $id");
            BaseDatos::Delete("vecinos", "id_vecino = $id");
            $respuesta['result'] = true;
        }
    }

    echo json_encode($respuesta);
?>