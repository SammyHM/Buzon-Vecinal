<?php
    
    class BaseDatos 
    {
        static $conexion = null;
        
        static function SetConexion() {
            try {
                $host = "db";
                $dbname = "buzon_vecinal";
                $username = "admin";
                $password = "admin";

                self::$conexion = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
                self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                throw new Error($e);
            }
        }

        static function Get(string $columnas, string $tabla, string $condicion) {
            $sth = self::$conexion->prepare("SELECT $columnas FROM $tabla WHERE $condicion");
            $sth->execute();
            return $sth->fetchAll(PDO::FETCH_ASSOC);
        }

        static function Insert($tabla, $values) {
            try {
                $sth = self::$conexion->prepare("INSERT INTO $tabla VALUES($values)");
                $sth->execute();
                return (bool)$sth->rowCount();
            } catch (Exception $e) {
                return false;
            }
        }

        static function InsertColumns($tabla, $columns, $values) {
            try {
                $sth = self::$conexion->prepare("INSERT INTO $tabla ($columns) VALUES($values)");
                $sth->execute();
                return (bool)$sth->rowCount();
            } catch (Exception $e) {
                return false;
            }
        }

        static function Delete($tabla, $condicion) {
            try {
                $sth = self::$conexion->prepare("DELETE FROM $tabla WHERE $condicion");
                $sth->execute();
                return (bool)$sth->rowCount();
            } catch (Exception $e) {
                return false;
            }
        }

        static function Update($tabla, $columnas, $condicion) {
            try {
                $sth = self::$conexion->prepare("UPDATE $tabla Set $columnas WHERE $condicion");
                $sth->execute();
                return (bool)$sth->rowCount();
            } catch (Exception $e) {
                return false;
            }
        }

    }
    
?>