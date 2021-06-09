-- 1. Table design
CREATE SCHEMA `ruk_database`;
USE `ruk_database`;

CREATE TABLE `branches`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE `employees`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `salary` DECIMAL(10, 2) NOT NULL,
    `started_on` DATE NOT NULL,
    `branch_id` INT NOT NULL,
    CONSTRAINT fk_employees_branches
    FOREIGN KEY (`branch_id`)
    REFERENCES `branches`(`id`)
);

CREATE TABLE `clients`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `full_name` VARCHAR(50) NOT NULL,
    `age` INT NOT NULL
);

CREATE TABLE `employees_clients`(
	`employee_id` INT,
    `client_id` INT,
    CONSTRAINT fk_employees_clients_employees
    FOREIGN KEY (`employee_id`)
    REFERENCES `employees`(`id`),
    CONSTRAINT fk_employees_clinets_clients
    FOREIGN KEY (`client_id`)
    REFERENCES `clients`(`id`)
);

CREATE TABLE `bank_accounts`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `account_number` VARCHAR(10) NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL,
    `client_id` INT NOT NULL UNIQUE,
    CONSTRAINT fk_bank_accounts_clients
    FOREIGN KEY (`client_id`)
    REFERENCES `clients`(`id`)
);

CREATE TABLE `cards`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `card_number` VARCHAR(19) NOT NULL,
    `card_status` VARCHAR(7) NOT NULL,
    `bank_account_id` INT NOT NULL,
    CONSTRAINT fk_cards_bank_accounts
    FOREIGN KEY (`bank_account_id`)
    REFERENCES `bank_accounts`(`id`)
);

-- 2. Insert
INSERT INTO `cards`
(`card_number`, `card_status`, `bank_account_id`)
SELECT REVERSE(`full_name`), 'Active', `id`
FROM `clients`
WHERE `id` BETWEEN 191 AND 200;

-- 3. Update
UPDATE `employees_clients` AS ec
        JOIN
    (SELECT 
        ec2.`employee_id`, COUNT(ec2.`client_id`) AS `count`
    FROM
        `employees_clients` AS ec2
    GROUP BY ec2.`employee_id`
    ORDER BY `count` , ec2.`employee_id`) AS s 
SET 
    ec.`employee_id` = s.`employee_id`
WHERE
    ec.`employee_id` = ec.`client_id`;

-- 4. Delete
DELETE FROM `employees`
WHERE `id` NOT IN (SELECT `employee_id` FROM `employees_clients`);

-- 5. Clients
SELECT `id`, `full_name`
FROM `clients`
ORDER BY `id` ASC;

-- 6. Newbies
SELECT 
    `id`,
    CONCAT(`first_name`, ' ', `last_name`) AS `full_name`,
    CONCAT('$', `salary`) AS `salary`,
    `started_on`
FROM
    `employees`
WHERE
    `salary` >= 100000
        AND DATE(`started_on`) >= '2018-01-01'
ORDER BY `salary` DESC , `id` ASC;

-- 7. Cards against Humanity
SELECT 
    ca.`id`,
    CONCAT(ca.`card_number`, ' : ', c.`full_name`) AS `card_token`
FROM
    `clients` AS c
        JOIN
    `bank_accounts` AS ba ON c.`id` = ba.`client_id`
        JOIN
    `cards` AS ca ON ba.`id` = ca.`bank_account_id`
ORDER BY ca.`id` DESC;

-- 8. Top 5 employees
SELECT 
    CONCAT(`first_name`, ' ', `last_name`) AS `name`,
    `started_on`,
    `count_of_clients`
FROM
    `employees` AS e
        JOIN
    (SELECT 
        `employee_id`, COUNT(`client_id`) AS `count_of_clients`
    FROM
        `employees_clients`
    GROUP BY `employee_id`) AS c ON e.`id` = c.`employee_id`
ORDER BY `count_of_clients` DESC , `employee_id` ASC
LIMIT 5;

-- 9. Branch cards
SELECT 
    b.`name`, COUNT(ca.`id`) AS `count_of_cards`
FROM
    `branches` AS b
        LEFT JOIN
    `employees` AS e ON b.`id` = e.`branch_id`
        LEFT JOIN
    `employees_clients` AS ec ON e.`id` = ec.`employee_id`
        LEFT JOIN
    `clients` AS c ON ec.`client_id` = c.`id`
        LEFT JOIN
    `bank_accounts` AS ba ON c.`id` = ba.`client_id`
        LEFT JOIN
    `cards` AS ca ON ba.`id` = ca.`bank_account_id`
GROUP BY b.`name`
ORDER BY `count_of_cards` DESC , b.`name` ASC;

-- 10. Extract client cards count
CREATE FUNCTION udf_client_cards_count(`name` VARCHAR(30))
RETURNS INT
DETERMINISTIC
	RETURN (
    SELECT COUNT(ca.`id`) AS `cards`
	FROM `clients` AS c
	JOIN `bank_accounts` AS b ON c.`id` = b.`client_id`
	JOIN `cards` AS ca on b.`id` = ca.`bank_account_id`
	WHERE c.`full_name` = `name`);

-- 11. Extract client info
DELIMITER $$
CREATE PROCEDURE udp_clientinfo(`name` VARCHAR(20))
BEGIN
	SELECT c.`full_name`, c.`age`, b.`account_number`, CONCAT('$', b.`balance`) AS `balance`
	FROM `clients` AS c
	JOIN `bank_accounts` AS b ON c.`id` = b.`client_id`
	WHERE c.`full_name` = `name`;
END $$