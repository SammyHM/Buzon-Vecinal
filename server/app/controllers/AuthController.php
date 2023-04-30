<?php

namespace app\controllers;

use core\DataBase;
use core\Jwt;
use core\Request;
use core\Controller;

class AuthController extends Controller
{
	protected static function IsAuth(string $role): array | null
	{
		$response = Jwt::Decode(Request::Auth());
		if (!$response) {
			Request::SetResponse(403);
		} else if ($response[1]['role'] !== $role) {
			$response = null;
			Request::SetResponse(401);
		}
		return $response;
	}

	protected static function Login(string $table, string $role): array
	{
		$user = Request::Body()['user'] ?? null;
		$password = Request::Body()['password'] ?? null;

		$query = DataBase::Execute(
			"SELECT * 
			FROM usuarios
			INNER JOIN $table
			ON usuarios.id = $table.id 
			WHERE usuarios.user = ?",
			[$user]
		);

		$jwt = password_verify($password, $query->fetchAll(\PDO::FETCH_ASSOC)[0]['password'])
			? Jwt::Encode(['user' => $user, 'role' => $role])
			: false;
		return ['token' => $jwt];
	}

	protected static function Print(array | null $data): void
	{
		if (!$data) {
			Request::SetResponse(400);
		} else {
			echo json_encode($data);
		}
	}
}
