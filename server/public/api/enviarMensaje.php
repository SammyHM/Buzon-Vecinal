<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include_once("../functions/PDO.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $mail = $data['mail'];
    $subject = $data['subject'];
    $content = $data['content'];

    $respuesta = array('result' => false);

    BaseDatos::SetConexion();
    $vecino = BaseDatos::Get("id_vecino", "vecinos", "correo = '$mail'");
    if (count($vecino) === 1) {
        $id = $vecino[0]["id_vecino"];
        $id_mensaje = 1;
        $mensajes = BaseDatos::Get("id_buzon", "buzones", "id_vecino = $id");
        foreach ($mensajes as $mensaje) {
            if ($id_mensaje === $mensaje["id_buzon"]) $id_mensaje++;
            else break;
        }
        $respuesta['result'] = BaseDatos::Insert("buzones", "$id, $id_mensaje, '$content', '$subject'");
    }

    echo json_encode($respuesta);
?>