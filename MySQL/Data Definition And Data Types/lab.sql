-- 01. Create Tables

CREATE TABLE `employees`
(
	`id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `categories`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE `products`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `category_id` INT NOT NULL
);

-- 02. Insert Data in Tables

INSERT INTO `employees`
(`first_name`, `last_name`)
VALUES
('Peter', 'Petrov'),
('Georgi', 'Georgiev'),
('John', 'Doe');

--03. Alter Table

ALTER TABLE `employees`
ADD `middle_name` VARCHAR(45) NOT NULL;

-- 04. Adding Constraints

ALTER TABLE `products`
ADD CONSTRAINT `FK_category_id`
FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

-- 05. Modifying Columns

ALTER TABLE `employees`
MODIFY COLUMN `middle_name` VARCHAR(100) NOT NULL;