<?php

namespace app\controllers;

use core\DataBase;

use app\database\Buzon;

class UserController extends AuthController
{
	public static function ListCorreos(): void
	{
		$jwt = self::IsAuth('user');
		if ($jwt) {
			$mensajes = Buzon::SelectUser($jwt[1]['user']);
			echo json_encode($mensajes);
		}
	}

	public static function DeleteCorreo(string $id_mensaje): void
	{
		$jwt = self::IsAuth('user');
		if ($jwt && is_numeric($id_mensaje)) {
			$vecino = DataBase::Execute("SELECT * FROM usuarios WHERE user = ?", [$jwt[1]['user']]);
			$id_vecino = $vecino->fetchAll(\PDO::FETCH_ASSOC)[0]['id'];
			$response = Buzon::Delete($id_vecino, $id_mensaje) !== 0;
			self::Print(['deleted' => $response]);
		}
	}
}
