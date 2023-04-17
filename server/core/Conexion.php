<?php

namespace core;

use Error, Exception, PDOException, PDO;

class Conexion
{
    private static PDO $connection;

    public static function Init(PDO $connection)
    {
        self::$connection = $connection;
    }

    public static function Query(string $query)
    {
        try {
            $result = self::$connection->query($query);
            return $result->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            echo "<h1>Consulta invalida: $query</h1>";
            throw new Error($e);
        }
    }

    public static function Execute(string $query, array $params)
    {
        try {
            $sth = self::$connection->prepare($query);
            $sth->execute($params);
            return $sth;
        } catch (PDOException $e) {
            return $sth;
        }
    }
}
