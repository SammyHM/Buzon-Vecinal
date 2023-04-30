<?php

namespace app\database;

use core\DataBase;

class Usuario
{
	public static function SelectAll(): array
	{
		return DataBase::Query(
			"SELECT *
			FROM usuarios"
		);
	}

	public static function Select($id): array | null
	{
		$sth = DataBase::Execute(
			"SELECT *
	        FROM usuarios
    	    WHERE id = ?",
			[$id]
		);
		$vecinos = $sth->fetchAll(\PDO::FETCH_ASSOC);
		return $sth->rowCount() ? $vecinos : null;
	}

	public static function Update($id, $user): int
	{
		$sth = DataBase::Execute(
			"UPDATE usuarios 
        	SET user = ?
			WHERE id = ?",
			[$user, $id]
		);
		return $sth->rowCount();
	}

	public static function Insert($user, $password): int
	{
		$sth = DataBase::Execute(
			"INSERT INTO usuarios
			VALUES (0, ?, ?)",
			[$user, self::PasswordHash($password)]
		);
		return $sth->rowCount();
	}

	public static function Delete($id): int
	{
		$sth = DataBase::Execute(
			"DELETE FROM usuarios
        	WHERE id = ?",
			[$id]
		);
		return $sth->rowCount();
	}

	public static function PasswordHash($password)
	{
		return password_hash($password, PASSWORD_DEFAULT);
	}
}
