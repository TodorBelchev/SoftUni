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