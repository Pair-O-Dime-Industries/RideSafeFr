-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2021 at 03:31 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `micahb_ridesafe`
--
CREATE DATABASE IF NOT EXISTS `micahb_ridesafe` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `micahb_ridesafe`;

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `LicensePlate` varchar(11) NOT NULL,
  `Make` varchar(50) NOT NULL,
  `Model` varchar(50) NOT NULL,
  `CarPhoto` varchar(255) NOT NULL,
  `CertifiedCpyScn` varchar(50) NOT NULL,
  `RegNo` varchar(50) NOT NULL,
  `Owner` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `DriverID` int(50) NOT NULL,
  `FName` varchar(50) NOT NULL,
  `LName` varchar(50) NOT NULL,
  `PhNum` varchar(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `ProfileImg` varchar(255) NOT NULL,
  `LicenseScn` varchar(255) NOT NULL,
  `Approved` tinyint(1) NOT NULL DEFAULT 0,
  `LastLoc` int(255) DEFAULT NULL,
  `QrCode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ridealong`
--

CREATE TABLE `ridealong` (
  `ID` int(11) NOT NULL,
  `RiderID` int(50) NOT NULL,
  `RideAlongID` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rider`
--

CREATE TABLE `rider` (
  `RiderID` int(50) NOT NULL,
  `FName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `LName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Email` varchar(50) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhNum` varchar(10) NOT NULL,
  `ProfileImg` varchar(255) DEFAULT NULL,
  `Approved` tinyint(1) DEFAULT 0,
  `LastLoc` int(255) DEFAULT NULL,
  `IDcard` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rides`
--

CREATE TABLE `rides` (
  `RideID` int(11) NOT NULL,
  `LicensePlate` varchar(11) NOT NULL,
  `StartTime` datetime NOT NULL,
  `EndTime` datetime NOT NULL,
  `EndLoc` varchar(255) NOT NULL,
  `RiderID` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `superuser`
--

CREATE TABLE `superuser` (
  `SuperUserID` int(50) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `FName` varchar(50) NOT NULL,
  `LName` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`LicensePlate`),
  ADD KEY `Owner` (`Owner`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`DriverID`) USING BTREE;

--
-- Indexes for table `ridealong`
--
ALTER TABLE `ridealong`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RiderID` (`RiderID`),
  ADD KEY `RideAlongID` (`RideAlongID`);

--
-- Indexes for table `rider`
--
ALTER TABLE `rider`
  ADD PRIMARY KEY (`RiderID`);

--
-- Indexes for table `rides`
--
ALTER TABLE `rides`
  ADD PRIMARY KEY (`RideID`),
  ADD KEY `LicensePlate` (`LicensePlate`),
  ADD KEY `RiderID` (`RiderID`);

--
-- Indexes for table `superuser`
--
ALTER TABLE `superuser`
  ADD PRIMARY KEY (`SuperUserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `DriverID` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ridealong`
--
ALTER TABLE `ridealong`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rider`
--
ALTER TABLE `rider`
  MODIFY `RiderID` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rides`
--
ALTER TABLE `rides`
  MODIFY `RideID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `superuser`
--
ALTER TABLE `superuser`
  MODIFY `SuperUserID` int(50) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `car_ibfk_1` FOREIGN KEY (`Owner`) REFERENCES `driver` (`DriverID`);

--
-- Constraints for table `ridealong`
--
ALTER TABLE `ridealong`
  ADD CONSTRAINT `RideAlong_ibfk_1` FOREIGN KEY (`RideAlongID`) REFERENCES `rider` (`RiderID`),
  ADD CONSTRAINT `RideAlong_ibfk_2` FOREIGN KEY (`RiderID`) REFERENCES `rider` (`RiderID`);

--
-- Constraints for table `rides`
--
ALTER TABLE `rides`
  ADD CONSTRAINT `Rides_ibfk_1` FOREIGN KEY (`RiderID`) REFERENCES `rider` (`RiderID`),
  ADD CONSTRAINT `Rides_ibfk_2` FOREIGN KEY (`LicensePlate`) REFERENCES `car` (`LicensePlate`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
