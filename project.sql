-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2023 at 02:23 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `name`, `email`, `contact`, `password`, `user_type`, `date_time`) VALUES
(1, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, '111111', 'admin', '2023-10-28 05:20:37'),
(2, 'Jeet Sarkar', 'jeet@gmail.com', 0, '1234567', 'Teacher', '2023-10-28 16:56:52'),
(3, 'abac', 'abac@gmail.com', 0, '12345', 'QO', '2023-10-29 08:33:19'),
(4, 'radhika', 'radhika@gmail.com', 0, '1234', 'ProgramCordinator', '2023-10-29 10:57:14'),
(9, 'deepak sen', 'deepak@gmail.com', 0, 'aa', 'Student', '2023-10-31 17:05:38'),
(11, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, 'ss', 'Student', '2023-10-31 17:07:42'),
(12, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, 'sws', 'Student', '2023-10-31 17:10:25'),
(13, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, '1234567', 'Student', '2023-10-31 17:20:41'),
(14, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, '1234567', 'Student', '2023-10-31 17:21:29'),
(15, 'Pratibha Rajawat', 'preetu098@gmail.com', 0, 'jbjbjbhjb', 'Teacher', '2023-10-31 17:22:16'),
(16, 'Pratibha', 'pr@gmail.com', 0, '1234567', 'Teacher', '2023-10-31 17:54:45'),
(18, 'backend', 'sas@gmail.com', 0, '1111111', 'Student', '2023-11-04 16:49:08'),
(19, 'fds', 'fds@gm.com', 0, 'dsadasasdasd', 'Student', '2023-11-04 16:56:19'),
(22, 'shanmukh', 'shannu@gmail.com', 0, '1234567', 'Admin', '2023-11-04 17:02:40'),
(26, 'Fahad Aslam1', 'hina.batool@pitb.gov.pk1', 0, '12345678', 'Student', '2023-11-16 19:15:55'),
(27, '', '', 0, '', '', '2023-11-17 04:30:39'),
(28, 'harsha', 'harsha@gmail.com', 0, '1111111', 'Teacher', '2023-11-17 04:37:19'),
(29, 'shr', 'shr@gmail.com', 0, '11111', 'Teacher', '2023-11-17 04:44:51'),
(30, 'shanmukhhhh', 'ass@gmail.com', 0, 'aa', 'Student', '2023-11-17 07:56:33'),
(31, 'noob', 'noob@g.com', 0, 'noob', 'Student', '2023-11-17 08:59:37'),
(32, 'asdsda', 'admin@gmail.com', 0, '1', 'Student', '2023-11-18 17:10:54'),
(33, 'dfssd', 'shr@gmail.com', 0, 'asd', 'Student', '2023-11-19 19:15:16'),
(34, 'tester', 'vidya2@gmail.com', 0, '1111111', 'Student', '2023-11-19 22:07:45'),
(35, 'tester2', 'vidya32@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 22:43:20'),
(36, 'tester3', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '3333333333', 'Student', '2023-11-19 23:10:20'),
(37, 'tester4', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:13:11'),
(38, 'backend', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:14:29'),
(39, 'backend', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:17:14'),
(40, 'backend', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:18:22'),
(41, 'backend', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:18:24'),
(42, 'backend', 'shanmukh.ayyagari232000@gmail.com', 2147483647, '1111111', 'Student', '2023-11-19 23:31:31'),
(43, 'erererer', 'vidya@gmail.com', 4343434, '1111111', 'Student', '2023-11-19 23:36:15'),
(44, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-19 23:39:47'),
(45, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-19 23:48:52'),
(46, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-19 23:57:33'),
(47, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-19 23:59:14'),
(48, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-20 00:03:47'),
(49, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-20 00:17:51'),
(50, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-20 00:18:06'),
(51, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-20 00:18:14'),
(52, 'dsadasda', 'vidya@gmail.com', 424342, '1111111', 'Student', '2023-11-20 00:38:15'),
(53, 'backend', 'vidyadf@gmail.com', 22232332, '1111111', 'Teacher', '2023-11-20 00:46:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
