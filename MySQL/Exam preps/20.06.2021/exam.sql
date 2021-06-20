-- 1. Table Design
CREATE TABLE `drivers`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `clients`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `addresses`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL DEFAULT 0,
    `mileage` INT DEFAULT 0,
    `condition` CHAR(1) NOT NULL,
    `category_id` INT NOT NULL,
    CONSTRAINT fk_cars_categories
    FOREIGN KEY (`category_id`)
    REFERENCES `categories`(`id`)
);

CREATE TABLE `courses`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL(10, 2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses
    FOREIGN KEY (`from_address_id`)
    REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`)
    REFERENCES `cars`(`id`),
	CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`)
    REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
    CONSTRAINT pk_cars_drivers
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cd_cars
    FOREIGN KEY (`car_id`)
    REFERENCES `cars`(`id`),
    CONSTRAINT fk_cd_drivers
    FOREIGN KEY (`driver_id`)
    REFERENCES `drivers`(`id`)
);

-- 02. Insert
INSERT INTO `clients`
(`full_name`, `phone_number`)
SELECT
	CONCAT(d.`first_name`, ' ', d.`last_name`), 
    CONCAT('(088) 9999', d.`id` * 2)
FROM `drivers` AS d
WHERE d.`id` BETWEEN 10 AND 20;

-- 03. Update
UPDATE `cars` 
SET 
    `condition` = 'C'
WHERE
    `mileage` >= 800000
        OR `mileage` IS NULL AND `year` <= 2010
        AND `make` NOT IN ('Mercedes-Benz');

-- 04. Delete
DELETE c FROM `clients` AS c
        LEFT JOIN
    `courses` AS co ON c.`id` = co.`client_id` 
WHERE
    co.`id` IS NULL
    AND CHAR_LENGTH(c.`full_name`);

-- 05. Cars
SELECT 
    `make`, `model`, `condition`
FROM
    `cars`
ORDER BY `id` ASC;

-- 06. Drivers and Cars
SELECT 
    d.`first_name`,
    d.`last_name`,
    c.`make`,
    c.`model`,
    c.`mileage`
FROM
    `cars` AS c
        JOIN
    `cars_drivers` AS cd ON c.`id` = cd.`car_id`
        JOIN
    `drivers` AS d ON cd.`driver_id` = d.`id`
WHERE
    c.`mileage` IS NOT NULL
ORDER BY c.`mileage` DESC , d.`first_name` ASC;