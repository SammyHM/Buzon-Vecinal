<?php

namespace app\database;

use core\DataBase;

class Vecino
{
	public static function PublicSelectAll(): array
	{
		return DataBase::Query(
			"SELECT imagen, nombre, piso, puerta, user 
			FROM vecinos
			INNER JOIN usuarios
			ON vecinos.id = usuarios.id"
		);
	}

	public static function AdminSelectAll(): array
	{
		return DataBase::Query(
			"SELECT * 
			FROM vecinos
			INNER JOIN usuarios
			ON vecinos.id = usuarios.id"
		);
	}

	public static function AdminSelect($id): array | null
	{
		$sth = DataBase::Execute(
			"SELECT * 
			FROM vecinos
			INNER JOIN usuarios
			ON vecinos.id = usuarios.id
			WHERE usuarios.id = ?",
			[$id]
		);
		$vecinos = $sth->fetchAll(\PDO::FETCH_ASSOC);
		return $sth->rowCount() ? $vecinos : null;
	}

	public static function Update($id, $nombre, $piso, $puerta, $imagen): int
	{
		$sth = DataBase::Execute(
			"UPDATE vecinos 
			SET nombre = ?, piso = ?, puerta = ?, imagen = ?
			WHERE id = ?",
			[$nombre, $piso, $puerta, $imagen, $id]
		);
		return $sth->rowCount();
	}

	public static function Insert($id, $nombre, $piso, $puerta, $imagen): int
	{
		$sth = DataBase::Execute(
			"INSERT INTO vecinos 
			VALUES (?, ?, ?, ?, ?)",
			[$id, $nombre, $piso, $puerta, $imagen]
		);
		return $sth->rowCount();
	}

	public static function Delete($id): int
	{
		Buzon::DeleteAll($id);
		DataBase::Execute(
			"DELETE FROM vecinos
			WHERE id = ?",
			[$id]
		);
		return Usuario::Delete($id);
	}
}
