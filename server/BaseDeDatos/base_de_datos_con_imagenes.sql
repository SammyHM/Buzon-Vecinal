-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2023 a las 18:35:20
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
  `contrasena` varchar(20) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vecinos`
--

INSERT INTO `vecinos` (`id_vecino`, `correo`, `contrasena`, `imagen`) VALUES
(1, 'samuel@gmail.com', 'jesus', 'img/profile1.jpg'),
(2, 'roberto@gmail.com', 'piano', 'img/profile2.jpg'),
(3, 'pedro@gmail.com', 'gato', 'img/profile3.jpg'),
(4, 'ana@gmail.com', 'mesa', 'img/profile4.jpg'),
(5, 'jose@gmail.com', 'ventana', NULL),
(6, 'carlos@gmail.com', 'puerta', NULL),
(7, 'sofia@gmail.com', 'flor', NULL),
(8, 'alberto@gmail.com', 'libro', NULL),
(9, 'isabel@gmail.com', 'sombrero', NULL),
(10, 'javier@gmail.com', 'coche', NULL);

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
