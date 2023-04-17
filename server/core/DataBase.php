<?php

namespace core;

use Exception;
use PDO;
use PDOException;
use PDOStatement;

/**
 * Class Database.
 * 
 * @param ?PDO $connection
 */
class DataBase
{
	private static ?PDO $connection;

	/**
	 * Initializes database connection.
	 */
	public static function Init(string $host, string $dbname, string $username, string $password): void
	{
		try {
			self::$connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
			self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $e) {
			throw new Exception("No se pudo conectar a la base de datos: mysql:host=$host;dbname=$dbname;user=$username;password=$password.\n $e");
		}
	}

	/**
	 * Executes a query.
	 * 
	 * @return array Returns query result
	 * @throws PDOException
	 */
	public static function Query(string $query): array
	{
		try {
			$result = self::$connection->query($query);
			return $result->fetchAll(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			throw new Exception("Consulta invalida: $query.\n $e");
		}
	}

	/**
	 * Executes a prepared statement.
	 * 
	 * @return PDOStatment Returns prepared statement
	 * @throws PDOException
	 */
	public static function Execute(string $query, array $params): PDOStatement
	{
		try {
			$sth = self::$connection->prepare($query);
			$sth->execute($params);
			return $sth;
		} catch (PDOException $e) {
			throw new Exception("Consulta invalida: $query.\n $e");
		}
	}

	/**
	 * Closes the connection
	 */
	public static function Close(): void
	{
		self::$connection = null;
	}
}
