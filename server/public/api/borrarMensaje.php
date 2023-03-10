<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $jwt = $data['jwt'];
    $id_mensaje = $data['message'];

    $respuesta = array('result' => false);

    $decodedJwt = JWT::decode($jwt);
    if ($decodedJwt) {
        BaseDatos::SetConexion();

        $mail = $decodedJwt[1]['correo'];

        $vecino = BaseDatos::Get("id_vecino", "vecinos", "correo = '$mail'");
        if (count($vecino) === 1) {
            $id = $vecino[0]["id_vecino"];
            $respuesta['result'] = BaseDatos::Delete("buzones", "id_vecino = $id AND id_buzon = $id_mensaje");
        }
    }

    echo json_encode($respuesta);
?>