-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2023 a las 15:04:57
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
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `usuario`, `contrasena`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buzones`
--

CREATE TABLE `buzones` (
  `id_vecino` int(11) NOT NULL,
  `id_buzon` int(11) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buzones`
--

INSERT INTO `buzones` (`id_vecino`, `id_buzon`, `mensaje`, `asunto`) VALUES
(1, 1, 'mensajito', 'Mesa'),
(1, 2, 'mensajito2', 'Piano'),
(1, 3, 'mensajito3', 'Casa'),
(1, 4, 'mensajito4', 'Tabique'),
(1, 5, 'mensajito5', 'Medicina'),
(1, 6, 'mensajito6', 'Alquiler'),
(1, 7, 'Buen mensajeasdfa', 'Cosicas'),
(1, 8, 'asdfasdf', 'Asunto importante'),
(1, 9, 'asdfasdf', 'Asunto importante'),
(2, 1, 'Men saje', 'Bienvenido'),
(2, 2, 'Mensaje test', 'Tabla');

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
(8, 'alberto@gmail.com', 'libro', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
