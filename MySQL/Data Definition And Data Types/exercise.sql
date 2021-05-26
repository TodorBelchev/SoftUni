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

-- 07. Create Table Users

CREATE TABLE `users`
(
	`id` INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `username` VARCHAR(30) UNIQUE NOT NULL,
    `password` VARCHAR(26) NOT NULL,
    `profile_picture` BLOB,
    `last_login_time` TIMESTAMP,
    `is_deleted` BOOLEAN
);

INSERT INTO `users`
(`username`, `password`)
VALUES
('Pesho', '12345'),
('Gosho', '12345'),
('Stamat', '12345'),
('Tosho', '12345'),
('Losho', '12345');

-- 08. Change Primary Key

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT `pk_users` PRIMARY KEY(`id`, `username`);

-- 09. Set Default Value of a Field

ALTER TABLE `users` 
MODIFY COLUMN `last_login_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP; -- now()

-- 10. Set Unique Field

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT PRIMARY KEY (`id`),
ADD CONSTRAINT UNIQUE (`username`);

-- 11. Movies Database

CREATE TABLE `directors`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `director_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `genres`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `genre_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `categories`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `movies`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `director_id` INT NOT NULL,
    `copyright_year` YEAR NOT NULL,
    `length` TIME NOT NULL,
    `genre_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    `rating` INT,
    `notes` TEXT
);

INSERT INTO `directors`
(`director_name`)
VALUES
('Pesho'),
('Pesho'),
('Pesho'),
('Pesho'),
('Pesho');

INSERT INTO `genres`
(`genre_name`)
VALUES
('Horror'),
('Horror'),
('Horror'),
('Horror'),
('Horror');

INSERT INTO `categories`
(`category_name`)
VALUES
('Scary'),
('Scary'),
('Scary'),
('Scary'),
('Scary');

INSERT INTO `movies`
(`id`, `title`, `director_id`, `copyright_year`, `length`, `genre_id`, `category_id`)
VALUES
(1, 'Pesho', 1, '2020', 108, 1, 1),
(2, 'Pesho', 1, '2020', 108, 1, 1),
(3, 'Pesho', 1, '2020', 108, 1, 1),
(4, 'Pesho', 1, '2020', 108, 1, 1),
(5, 'Pesho', 1, '2020', 108, 1, 1);

-- 12. Car Rental Database

CREATE TABLE `categories`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `daily_rate` DOUBLE NOT NULL,
    `weekly_rate` DOUBLE NOT NULL,
    `monthly_rate` DOUBLE NOT NULL,
    `weekend_rate` DOUBLE NOT NULL
);

CREATE TABLE `cars`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `plate_number` VARCHAR(30) NOT NULL,
    `make` VARCHAR(30) NOT NULL,
    `model` VARCHAR(30) NOT NULL,
    `car_year` YEAR NOT NULL,
    `category_id` INT NOT NULL,
    `doors` INT NOT NULL,
    `picture` BLOB,
    `car_condition` VARCHAR(30),
    `available` BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE `employees`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `customers`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `driver_license_number` VARCHAR(30) NOT NULL,
    `full_name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `zip_code` INT NOT NULL,
    `notes` TEXT
);

CREATE TABLE `rental_orders`
(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`employee_id` INT NOT NULL,
	`customer_id` INT NOT NULL,
	`car_id` INT NOT NULL,
	`car_condition` VARCHAR(20),
	`tank_level` DOUBLE,
	`kilometrage_start` DOUBLE,
	`kilometrage_end` DOUBLE,
	`total_kilometrage` DOUBLE,
	`start_date` DATE,
	`end_date` DATE,
	`total_days` INT,
	`rate_applied` DOUBLE,
	`tax_rate` DOUBLE,
	`order_status` VARCHAR(30),
	`notes` TEXT
);

INSERT INTO `categories`
(`category`, `daily_rate`, `weekly_rate`, `monthly_rate`, `weekend_rate`)
VALUES 
('1', 1, 2, 3, 4),
('2', 1, 2, 3, 4),
('3', 1, 2, 3, 4);

INSERT INTO `cars`
(`plate_number`, `make`, `model`, `car_year`, `category_id`, `doors`, `car_condition`)
VALUES 
('1', '1', '1', '2000', 1, 2, 'New'),
('2', '2', '2', '2000', 1, 2, 'Used'),
('3', '3', '3', '2000', 1, 2, 'Used');

INSERT INTO `employees`
(`first_name`, `last_name`, `title`)
VALUES 
('Pesho', 'Petrov', 'Worker'),
('Pesho', 'Petrov', 'Worker'),
('Pesho', 'Petrov', 'Worker');

INSERT INTO `customers`
(`driver_license_number`, `full_name`, `address`, `city`, `zip_code`)
VALUES 
('1111', 'Pesho Petrov', 'Some address', 'Sofia', 1000),
('1111', 'Pesho Petrov', 'Some address', 'Sofia', 1000),
('1111', 'Pesho Petrov', 'Some address', 'Sofia', 1000);

INSERT INTO `rental_orders`
(`employee_id`, `customer_id`, `car_id`, `car_condition`, `start_date`)
VALUES 
(1, 1, 1, 'New','2000-01-01'),
(1, 1, 1, 'New','2000-01-01'),
(1, 1, 1, 'New', '2000-01-01');

-- 13. Basic Insert

INSERT INTO `towns`
(`name`)
VALUES
('Sofia'),
('Plovdiv'),
('Varna'),
('Burgas');

INSERT INTO `departments`
(`name`)
VALUES
('Engineering'),
('Sales'),
('Marketing'),
('Software Development'),
('Quality Assurance');

INSERT INTO `employees`
(`first_name`,`middle_name`, `last_name`, `job_title`, `department_id`, `hire_date`, `salary`)
VALUES
('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00),
('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25),
('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00),
('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);

-- 14. Basic Select All Fields

SELECT * FROM `towns`;
SELECT * FROM `departments`;
SELECT * FROM `employees`;

-- 15. Basic Select All Fields and Order Them

SELECT * FROM `towns`
ORDER BY `name` ASC;

SELECT * FROM `departments`
ORDER BY `name` ASC;

SELECT * FROM `employees`
ORDER BY `salary` DESC;

-- 16. Basic Select Some Fields

SELECT `name` FROM `towns`
ORDER BY `name` ASC;

SELECT `name` FROM `departments`
ORDER BY `name` ASC;

SELECT `first_name`, `last_name`, `job_title`, `salary` FROM `employees`
ORDER BY `salary` DESC;

-- 17. Increase Employees Salary

UPDATE `employees` 
SET `salary` = `salary` * 1.1
WHERE `id` > 0;

SELECT `salary` FROM `employees`;

-- 18. Delete All Records

DELETE FROM `occupancies`;