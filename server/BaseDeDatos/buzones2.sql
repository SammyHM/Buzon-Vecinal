-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2023 a las 19:01:52
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `buzones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buzones`
--

CREATE TABLE `buzones` (
  `id_vecino` int(11) NOT NULL,
  `id_buzon` int(11) NOT NULL,
  `mensaje` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buzones`
--

INSERT INTO `buzones` (`id_vecino`, `id_buzon`, `mensaje`) VALUES
(1, 1, 'mensajito'),
(1, 2, 'mensajito2'),
(1, 3, 'mensajito3'),
(1, 4, 'mensajito4'),
(1, 5, 'mensajito5'),
(1, 6, 'mensajito6'),
(2, 1, 'Men saje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vecinos`
--

CREATE TABLE `vecinos` (
  `id_vecino` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contrasena` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vecinos`
--

INSERT INTO `vecinos` (`id_vecino`, `correo`, `contrasena`) VALUES
(1, 'samuel@gmail.com', 'jesus'),
(2, 'roberto@gmail.com', 'piano'),
(3, 'pedro@gmail.com', 'gato'),
(4, 'ana@gmail.com', 'mesa'),
(5, 'jose@gmail.com', 'ventana'),
(6, 'carlos@gmail.com', 'puerta'),
(7, 'sofia@gmail.com', 'flor'),
(8, 'alberto@gmail.com', 'libro'),
(9, 'isabel@gmail.com', 'sombrero'),
(10, 'javier@gmail.com', 'coche'),
(11, 'paula@gmail.com', 'estrella'),
(12, 'luis@gmail.com', 'luna'),
(13, 'diana@gmail.com', 'sol'),
(14, 'juan@gmail.com', 'silla'),
(15, 'maria@gmail.com', 'perro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buzones`
--
ALTER TABLE `buzones`
  ADD PRIMARY KEY (`id_vecino`,`id_buzon`);

--
-- Indices de la tabla `vecinos`
--
ALTER TABLE `vecinos`
  ADD PRIMARY KEY (`id_vecino`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vecinos`
--
ALTER TABLE `vecinos`
  MODIFY `id_vecino` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buzones`
--
ALTER TABLE `buzones`
  ADD CONSTRAINT `buzones_ibfk_1` FOREIGN KEY (`id_vecino`) REFERENCES `vecinos` (`id_vecino`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
