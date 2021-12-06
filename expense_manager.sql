/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 8.0.26 : Database - expense_manager
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`expense_manager` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `expense_manager`;

/*Table structure for table `expenses` */

DROP TABLE IF EXISTS `expenses`;

CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `weekDay` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `expenses` */

insert  into `expenses`(`id`,`title`,`amount`,`date`,`createdAt`,`updatedAt`,`weekDay`,`user_id`) values 
(1,'Expense1',108,'2021-12-06 00:00:00','2021-12-06 04:23:44','2021-12-06 04:23:44','1',2),
(2,'Expense2',108,'2021-12-06 00:00:00','2021-12-06 04:23:57','2021-12-06 04:23:57','1',2),
(3,'Expense2',109,'2021-12-07 00:00:00','2021-12-06 04:24:06','2021-12-06 04:24:06','2',2),
(4,'Expense2',189,'2021-12-07 00:00:00','2021-12-06 04:24:10','2021-12-06 04:24:10','2',2),
(5,'Expense2',489,'2021-12-08 00:00:00','2021-12-06 04:24:20','2021-12-06 04:24:20','3',2),
(6,'Expense7',400,'2021-12-08 00:00:00','2021-12-06 04:24:46','2021-12-06 04:24:46','3',2),
(7,'Expense8',450,'2021-12-09 00:00:00','2021-12-06 04:25:00','2021-12-06 04:25:00','4',2),
(8,'Expense8',400,'2021-12-10 00:00:00','2021-12-06 04:25:09','2021-12-06 04:25:09','5',2),
(9,'Expense8',500,'2021-12-12 00:00:00','2021-12-06 04:25:21','2021-12-06 04:25:21','7',2),
(10,'Expense8',508,'2021-12-11 00:00:00','2021-12-06 04:25:49','2021-12-06 04:25:49','6',2),
(11,'Expense8',508,'2021-12-11 00:00:00','2021-12-06 04:25:50','2021-12-06 04:25:50','6',2);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`createdAt`,`updatedAt`) values 
(1,'admin','2021-12-06 04:17:53','2021-12-06 04:17:53'),
(2,'user','2021-12-06 04:17:59','2021-12-06 04:17:59');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`role_id`,`createdAt`,`updatedAt`) values 
(1,'shivam','shivam1234','1','2021-12-06 04:18:31','2021-12-06 04:18:31'),
(2,'mithul','mithul1234','2','2021-12-06 04:20:15','2021-12-06 04:20:15'),
(3,'das','das12345','2','2021-12-06 04:20:34','2021-12-06 04:20:34'),
(4,'das2','das12345','2','2021-12-06 05:39:04','2021-12-06 05:39:04');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
