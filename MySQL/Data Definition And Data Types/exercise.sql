-- 01. Create Tables

CREATE TABLE `minions`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `age` INT NOT NULL
);

CREATE TABLE `towns`
(
	`town_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
);

-- 02. Alter Minions Table

ALTER TABLE `minions`
ADD COLUMN `town_id` INT;

ALTER TABLE `minions`
ADD CONSTRAINT `FK_MINON_TOWN`
FOREIGN KEY(`town_id`)
REFERENCES `towns`(`id`);

-- 03. Insert Records in Both Tables

INSERT INTO `towns`
(`id`,`name`)
VALUES
(1, 'Sofia'),
(2, 'Plovdiv'),
(3, 'Varna');

INSERT INTO `minions`
(`id`, `name`, `age`, `town_id`)
VALUES
(1, 'Kevin', 22, 1),
(2, 'Bob', 15, 3),
(3, 'Steward', NULL, 2);

-- 04. Truncate Table Minions

TRUNCATE TABLE `minions`;

-- 05. Drop All Tables

DROP TABLE `minions`;
DROP TABLE `towns`;

-- 06. Create Table People

CREATE TABLE `people`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `picture` BLOB,
    `height` DOUBLE(3, 2),
    `weight` DOUBLE(3, 2),
    `gender` ENUM('m', 'f') NOT NULL,
    `birthdate` DATE NOT NULL,
    `biography` LONGTEXT
);

INSERT INTO `people`
(`id`, `name`, `gender`,`birthdate`)
VALUES
(1, 'John Doe', 'm', '2000-01-01'),
(2, 'Jane Doe', 'f', '2000-01-01'),
(3, 'John Doe2', 'm', '2000-01-01'),
(4, 'John Doe3', 'm', '2000-01-01'),
(5, 'John Doe4', 'm', '2000-01-01');