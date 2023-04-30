-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Apr 07, 2023 at 06:05 AM
-- Server version: 8.0.32
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `buzon_vecinal`
--

-- --------------------------------------------------------

--
-- Table structure for table `administradores`
--

CREATE TABLE `administradores` (
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `administradores`
--

INSERT INTO `administradores` (`id`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `buzones`
--

CREATE TABLE `buzones` (
  `id_mensaje` int NOT NULL,
  `id_vecino` int NOT NULL,
  `mensaje` text NOT NULL,
  `asunto` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `buzones`
--

INSERT INTO `buzones` (`id_mensaje`, `id_vecino`, `mensaje`, `asunto`) VALUES
(1, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies elit non lectus euismod, tristique euismod augue vestibulum. Aliquam ut bibendum arcu. Donec laoreet quam sit amet vehicula convallis. Aliquam molestie mi in magna varius tempus. Duis lobortis lorem ac velit elementum vehicula non id mauris. Phasellus tincidunt placerat dignissim. Nulla eget lacinia odio. Sed pharetra, arcu vitae fermentum bibendum, neque elit efficitur purus, sed scelerisque quam neque at neque. Maecenas in urna neque. Quisque gravida viverra vehicula. Morbi malesuada id lectus sed dignissim. Phasellus tortor mauris, dapibus id rutrum at, volutpat ut est. Duis posuere tincidunt felis cursus tempor. Quisque et libero nunc. Aenean ac elit nec arcu faucibus consectetur ut in enim. Fusce at metus id ante consequat viverra.\r\n\r\nMorbi luctus, tortor a convallis laoreet, diam neque eleifend ante, nec tempus augue felis vitae erat. Ut non turpis et arcu interdum facilisis ac a mauris. Duis aliquam dui metus, ut aliquet est scelerisque sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent iaculis felis non lacus malesuada, id consectetur est blandit. Sed varius, leo et interdum molestie, tortor nisi mattis sapien, id placerat eros augue sed nisi. Sed auctor lobortis quam, eu tempor erat tincidunt eu. Maecenas fermentum eleifend lorem nec hendrerit. Proin id tincidunt nunc. Sed libero lectus, semper interdum ornare vel, ullamcorper nec tellus. Proin interdum aliquet enim, id cursus odio condimentum et. Sed finibus est eu ex egestas, semper sollicitudin purus varius. Sed lorem leo, faucibus non dui placerat, consectetur vestibulum magna. Sed sit amet ultrices felis. Pellentesque ac pharetra ipsum.\r\n\r\nSuspendisse ligula nunc, interdum eu rutrum id, sodales nec magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non felis nibh. Quisque dapibus ligula sapien, non aliquet nibh congue eget. Sed nec massa dui. Suspendisse efficitur pellentesque lorem, vel egestas nunc varius at. Morbi luctus tortor vestibulum enim aliquet, sit amet dapibus metus iaculis. Aenean commodo felis vitae imperdiet tempor. Maecenas id elementum nisi, ut dapibus orci. Praesent efficitur sed massa lobortis pulvinar. Maecenas tincidunt tincidunt diam, et ornare lorem luctus ut. Suspendisse rhoncus nibh sed diam auctor, eget ullamcorper mauris pellentesque.\r\n\r\nProin magna nunc, vestibulum sit amet feugiat at, rutrum et elit. Nam ullamcorper vulputate placerat. Nam sed magna urna. Aliquam vel gravida mauris. Nunc sed consequat mi. Praesent efficitur sit amet dui in malesuada. Sed et accumsan sapien. Aenean cursus nibh quis nibh varius sollicitudin. In hendrerit sem in purus ultricies tincidunt. Cras purus massa, bibendum id dignissim a, accumsan id orci. Cras interdum accumsan aliquam. Etiam a turpis ipsum. Donec pretium odio ut nibh tincidunt ultricies. Sed suscipit, ante non blandit mollis, lorem urna consectetur orci, quis euismod massa turpis quis diam. Mauris tincidunt nibh vel feugiat malesuada. Etiam fringilla augue purus, a interdum ligula posuere ac.\r\n\r\nVivamus quis molestie leo. Duis vulputate lorem libero, vitae cursus augue dignissim vitae. Donec vestibulum nulla nunc, vitae ultricies nulla tincidunt et. Aliquam et ex dolor. Proin nec leo arcu. In fermentum turpis eget arcu laoreet, at mattis lacus pharetra. Etiam pharetra velit vitae felis interdum eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec condimentum, urna quis pharetra pulvinar, mauris velit molestie mauris, eget auctor diam lectus sit amet dui. Mauris ut ex vel massa tristique congue nec ac tellus. Vivamus nec semper sapien. Vivamus sed orci non lacus sodales fermentum. Sed quis euismod ex. Sed id tincidunt nulla. Donec eget enim nec est aliquet imperdiet in sit amet orci. Mauris ipsum orci, accumsan a lacus non, luctus ultricies diam.', 'Primer Asunto'),
(2, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus lacus turpis, a bibendum orci tincidunt eget. Curabitur posuere tempus cursus. Proin eu blandit mi. Ut congue metus et tempor lobortis. Praesent at augue bibendum, tincidunt nunc sed, lobortis quam. Integer non purus accumsan, facilisis tellus sit amet, elementum diam. Vestibulum egestas sit amet tortor sit amet tristique. Duis justo magna, mattis eu risus nec, vulputate tempus libero. Cras eu quam sed quam sollicitudin mattis ut ac justo. Curabitur nec sapien ac nunc porta aliquam in eget nunc. Pellentesque imperdiet elementum lectus, nec rutrum nunc.\r\n\r\nSed sodales feugiat gravida. Fusce tellus neque, iaculis sed pretium sed, varius eu metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin mattis nulla libero, eu euismod leo egestas ut. Morbi sed ex dolor. Vivamus feugiat, lorem sed eleifend ultrices, nibh dui varius ligula, id lobortis arcu velit in ante. Mauris quis venenatis nibh. Quisque tristique, metus a semper vestibulum, lectus felis pharetra neque, id porta libero felis id elit. Maecenas maximus dui vitae nunc aliquam convallis. Aliquam semper sapien id magna ultricies congue. Cras malesuada, quam eget scelerisque vehicula, tortor leo pharetra lorem, id commodo felis augue nec ante. Mauris iaculis id ante vel placerat.\r\n\r\nPhasellus vitae sodales nibh. In ac quam in risus lacinia viverra. Nullam sit amet fringilla nibh. Nam pretium velit varius mi aliquam, vel suscipit neque volutpat. Fusce sed ex a nibh blandit sollicitudin. Duis maximus maximus nunc, vitae gravida elit vehicula a. Vestibulum sit amet tincidunt urna. Nam at euismod metus. Quisque sagittis eleifend nulla, id venenatis mauris.\r\n\r\nSuspendisse velit velit, consectetur non varius id, bibendum vitae quam. Nulla rutrum elit quis est commodo, a lobortis nisl facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at rutrum ipsum. Duis pellentesque leo quam. Morbi molestie pretium tellus, at iaculis purus efficitur vitae. Maecenas diam est, tempus et suscipit sed, semper in velit. Curabitur nunc nulla, posuere et congue ut, scelerisque sit amet massa. Phasellus tempor odio ut leo faucibus lacinia. Proin sed lacinia libero, vel fermentum nunc. Suspendisse magna libero, porttitor vel luctus nec, gravida eu enim. Donec leo lacus, euismod ut nulla at, eleifend tempus leo. Ut a tortor iaculis, ullamcorper enim at, pretium odio. In rutrum purus vitae leo hendrerit, vel egestas nisl posuere. Proin lacinia euismod felis quis ornare. Aliquam vel suscipit quam.\r\n\r\nIn convallis porta justo, in egestas ipsum feugiat at. Vivamus commodo mauris eget aliquam tempor. Phasellus purus libero, lacinia vel lacinia vel, varius in turpis. Cras nec mi fermentum, fermentum nunc at, condimentum ipsum. Nunc tristique nisi non nisl finibus porta. Morbi consequat tempus sagittis. Sed tincidunt diam dignissim, vehicula eros feugiat, bibendum eros. Nunc porttitor et neque in facilisis. Curabitur cursus scelerisque cursus. Ut mattis suscipit pellentesque. Etiam interdum consequat elit, quis volutpat erat commodo non. Integer eu volutpat eros.', 'Segundo Asunto');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(1, 'admin', '$2y$10$nD3Zn7S1q6AXiPYPCbBm4O.nA1amRhDjYEud0s.Yvz78LChh7kE0y'),
(2, 'samuel@gmail.com', '$2y$10$A5/uHC7BVj8EzPMPucJ17.bwD/9bh3U7Iek7kQ28jurVKRZ78rAni'),
(3, 'pedro@gmail.com', '$2y$10$xuo6fcadDpFI.Br16hjgdOG.DESzZACpVWU434SijQK9fi3ypqGZe'),
(4, 'sofia@gmail.com', '$2y$10$IHSh/fs39MPqkjYVQ1Hhd.KLED6KYKFDmdE3B1Aa4e28JOwg1.Y2i'),
(5, 'julio@gmail.com', '$2y$10$hrsmiPV4CBcGsSQwCbW4eOYdBH7FU8IRG8fNh4FSxPjRuDx/4N8C2'),
(6, 'andrea@gmail.com', '$2y$10$dlLR8RbolkKmn9OtpZPx0ep33brglCDJvedz.wGeasSkp/h.WEVoe');

-- --------------------------------------------------------

--
-- Table structure for table `vecinos`
--

CREATE TABLE `vecinos` (
  `id` int NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `piso` int NOT NULL,
  `puerta` varchar(8) NOT NULL,
  `imagen` varchar(256) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `vecinos`
--

INSERT INTO `vecinos` (`id`, `nombre`, `piso`, `puerta`, `imagen`) VALUES
(2, 'Samuel', 1, 'A', 'img\\profile1.jpg'),
(3, 'perdro', 2, 'B', 'img\\profile2.jpg'),
(4, 'Sofia', 1, 'B', 'img\\profile3.jpg'),
(5, 'Julio', 2, 'A', ''),
(6, 'Andrea', 3, 'C', 'img\\profile4.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buzones`
--
ALTER TABLE `buzones`
  ADD PRIMARY KEY (`id_mensaje`,`id_vecino`),
  ADD KEY `id_vecino` (`id_vecino`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `user` (`user`);

--
-- Indexes for table `vecinos`
--
ALTER TABLE `vecinos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buzones`
--
ALTER TABLE `buzones`
  MODIFY `id_mensaje` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administradores`
--
ALTER TABLE `administradores`
  ADD CONSTRAINT `administradores_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `buzones`
--
ALTER TABLE `buzones`
  ADD CONSTRAINT `buzones_ibfk_1` FOREIGN KEY (`id_vecino`) REFERENCES `vecinos` (`id`);

--
-- Constraints for table `vecinos`
--
ALTER TABLE `vecinos`
  ADD CONSTRAINT `vecinos_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
