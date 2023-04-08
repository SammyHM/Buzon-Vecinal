<?php

namespace app\controllers;

use core\Request;

use app\database\Vecino;
use app\database\Buzon;
use dev\Debug;

class PublicController extends AuthController
{
	public static function LoginUser(): void
	{
		$token = self::Login('vecinos', 'user');
		self::Print($token);
	}

	public static function LoginAdmin(): void
	{
		$token = self::Login('administradores', 'admin');
		self::Print($token);
	}

	public static function ListVecinos(): void
	{
		$vecinos = Vecino::PublicSelectAll();
		self::Print($vecinos);
	}

	public static function InsertCorreo(): void
	{
		$response = false;
		$body = Request::Body();
		// Debug::Show($body);
		if (self::IsMensajeSet($body)) {
			$response = Buzon::InsertByUsuario($body['user'], $body['mensaje'], $body['asunto']) !== 0;
		}
		self::Print(['inserted' => $response]);
	}

	private static function IsMensajeSet(array | null $body): bool
	{
		return isset($body) && isset($body['user']) && isset($body['mensaje']) && isset($body['asunto']);
	}
}
