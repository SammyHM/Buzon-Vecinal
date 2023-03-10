<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");

    BaseDatos::SetConexion();
    $respuesta = BaseDatos::Get("id_vecino, correo, imagen", "vecinos", "1=1");
    $i = 0;
    foreach($respuesta as $vecino) {
        if ($vecino['correo'] === "") {
            break;
        } else {
            $i++;
        }
    }
    array_splice($respuesta, $i, 1);
    echo json_encode($respuesta);
?>