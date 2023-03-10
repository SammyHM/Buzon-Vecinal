<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");
    include_once("../functions/JWT.php");

    $data = json_decode(file_get_contents('php://input'), true);
    $jwt = $data['jwt'];

    $respuesta = array('mesages' => false);
    
    $decodedJwt = JWT::decode($jwt);
    if ($decodedJwt && $decodedJwt[1]['role'] === 'user') {
        BaseDatos::SetConexion();
        
        $mail = $decodedJwt[1]['correo'];
        $vecino = BaseDatos::Get("id_vecino", "vecinos", "correo = '$mail'");
        if (count($vecino) === 1) {
            $id = $vecino[0]["id_vecino"];
            $respuesta['mesages'] = BaseDatos::Get("id_buzon, asunto, mensaje", "buzones", "id_vecino = $id");
        }
    }

    echo json_encode($respuesta);
?>