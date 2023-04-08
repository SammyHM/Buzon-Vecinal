<?php

namespace app\database;

use core\DataBase;

class Buzon
{
	public static function SelectAll($id_vecino): array | null
	{
		$sth = DataBase::Execute(
			"SELECT id_mensaje, mensaje, asunto
			FROM buzones
			WHERE id_vecino = ?",
			[$id_vecino]
		);
		$mensajes = $sth->fetchAll(\PDO::FETCH_ASSOC);
		return $sth->rowCount() ? $mensajes : null;
	}

	public static function Select($id_vecino, $id_mensaje): array | null
	{
		$sth = DataBase::Execute(
			"SELECT id_mensaje, mensaje, asunto
        	FROM buzones
        	WHERE id_vecino = ? AND id_mensaje = ?",
			[$id_vecino, $id_mensaje]
		);
		$mensajes = $sth->fetchAll(\PDO::FETCH_ASSOC);
		return $sth->rowCount() ? $mensajes : null;
	}

	public static function SelectUser($user): array | null
	{
		$sth = DataBase::Execute(
			"SELECT id_mensaje, asunto, mensaje 
			FROM buzones
			INNER JOIN usuarios
			ON buzones.id_vecino = usuarios.id 
			WHERE usuarios.user = ?",
			[$user]
		);
		$mensajes = $sth->fetchAll(\PDO::FETCH_ASSOC);
		return $sth->rowCount() ? $mensajes : null;
	}

	public static function Insert($id_vecino, $mensaje, $asunto): int
	{
		$sth = DataBase::Execute(
			"INSERT INTO buzones 
			VALUES (0, ?, ?, ?)",
			[$id_vecino, $mensaje, $asunto]
		);
		return $sth->rowCount();
	}

	public static function InsertByUsuario($user, $mensaje, $asunto): int
	{
		$columnsChanged = 0;

		$vecino = DataBase::Execute("SELECT * FROM usuarios WHERE user = ?", [$user]);
		$id_vecino = $vecino->fetchAll(\PDO::FETCH_ASSOC)[0]['id'] ?? false;

		if ($id_vecino) {
			$columnsChanged = self::Insert($id_vecino, $mensaje, $asunto);
		}

		return $columnsChanged;
	}

	public static function DeleteAll($id_vecino): int
	{
		$sth = DataBase::Execute(
			"DELETE FROM buzones
			WHERE id_vecino = ?",
			[$id_vecino]
		);
		return $sth->rowCount();
	}

	public static function Delete($id_vecino, $id_mensaje): int
	{
		$sth = DataBase::Execute(
			"DELETE FROM buzones
			WHERE id_vecino = ? AND id_mensaje = ?",
			[$id_vecino, $id_mensaje]
		);
		return $sth->rowCount();
	}
}
