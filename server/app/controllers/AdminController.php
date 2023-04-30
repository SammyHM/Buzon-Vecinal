<?php

namespace app\controllers;

use core\DataBase;
use core\Request;

use app\database\Usuario;
use app\database\Vecino;

class AdminController extends AuthController
{
	public static function ListVecinos(): void
	{
		if (self::IsAuth('admin')) {
			$vecinos = Request::Query() ? (Vecino::AdminSelect($_GET['id'] ?? -1)) : (Vecino::AdminSelectAll());
			self::Print($vecinos);
		}
	}

	public static function DeleteVecino(string $id): void
	{
		if (self::IsAuth('admin') && is_numeric($id)) {
			$response = Vecino::Delete($id) !== 0;
			self::Print(['deleted' => $response]);
		}
	}

	public static function UpdateVecino(string $id): void
	{
		if (self::IsAuth('admin') && is_numeric($id)) {
			$response = false;
			$body = Request::Body();
			if (self::IsVecinoSet($body)) {
				$usuario = Usuario::Update($id, $body['user']) !== 0;
				$vecino = Vecino::Update($id, $body['nombre'], $body['piso'], $body['puerta'], $body['imagen']) !== 0;
				$response = $usuario || $vecino;
			}
			self::Print(['updated' => $response]);
		}
	}

	public static function InsertVecino(): void
	{
		if (self::IsAuth('admin')) {
			$response = false;
			$body = Request::Body();
			if (self::IsVecinoSet($body) && isset($body['password']) && Usuario::Insert($body['user'], $body['password']) !== 0) {
				$id = DataBase::Query("SELECT LAST_INSERT_ID()")[0]["LAST_INSERT_ID()"];
				$response = Vecino::Insert($id, $body['nombre'], $body['piso'], $body['puerta'], $body['imagen']) !== 0;
			}
			self::Print(['inserted' => $response]);
		}
	}

	private static function IsVecinoSet(array | null $body): bool
	{
		return isset($body) && isset($body['user']) && isset($body['nombre']) &&
			isset($body['piso']) && isset($body['puerta']) && isset($body['imagen']);
	}
}
