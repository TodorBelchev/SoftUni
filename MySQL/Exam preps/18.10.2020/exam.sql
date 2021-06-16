-- 1. Table Design
CREATE TABLE `pictures`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `url` VARCHAR(100) NOT NULL,
    `added_on` DATETIME NOT NULL
);

CREATE TABLE `categories`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE `products`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL UNIQUE,
    `best_before` DATE,
    `price` DECIMAL(10, 2) NOT NULL,
    `description` TEXT,
    `category_id` INT NOT NULL,
    `picture_id` INT NOT NULL,
    CONSTRAINT fk_products_categories
    FOREIGN KEY (`category_id`)
    REFERENCES `categories`(`id`),
    CONSTRAINT fk_products_pictures
    FOREIGN KEY (`picture_id`)
    REFERENCES `pictures`(`id`)
);

CREATE TABLE `towns`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE `addresses`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `town_id` INT NOT NULL,
    CONSTRAINT fk_addresses_towns
    FOREIGN KEY (`town_id`)
    REFERENCES `towns`(`id`)
);

CREATE TABLE `stores`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL UNIQUE,
    `rating` FLOAT NOT NULL,
    `has_parking` TINYINT(1) DEFAULT FALSE,
    `address_id` INT NOT NULL,
    CONSTRAINT fk_stores_addresses
    FOREIGN KEY (`address_id`)
    REFERENCES `addresses`(`id`)
);

CREATE TABLE `products_stores`(
	`product_id` INT NOT NULL,
    `store_id` INT NOT NULL,
    CONSTRAINT pk_ps
    PRIMARY KEY(`product_id`, `store_id`),
    CONSTRAINT fk_ps_products
    FOREIGN KEY (`product_id`)
    REFERENCES `products`(`id`),
    CONSTRAINT fk_ps_stores
    FOREIGN KEY (`store_id`)
    REFERENCES `stores`(`id`)
);

CREATE TABLE `employees`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(15) NOT NULL,
    `middle_name` CHAR(1),
    `last_name` VARCHAR(20) NOT NULL,
    `salary` DECIMAL(19, 2) NOT NULL DEFAULT 0,
    `hire_date` DATE NOT NULL,
    `manager_id` INT,
    `store_id` INT NOT NULL,
    CONSTRAINT fk_employees_stores
    FOREIGN KEY (`store_id`)
    REFERENCES `stores`(`id`),
    CONSTRAINT fk_employees_employees
    FOREIGN KEY (`manager_id`)
    REFERENCES `employees`(`id`)
);

-- 2. Insert
INSERT INTO `products_stores`
(`product_id`, `store_id`)
SELECT `id`, 1 FROM `products`
WHERE `id` NOT IN (SELECT `product_id` FROM `products_stores`);

-- 3. Update
SET foreign_key_checks = 0;
UPDATE `employees` AS e
LEFT JOIN `stores` AS s ON e.`store_id` = s.`id`
SET e.`manager_id` = 3 AND e.`salary` = e.`salary` - 500
WHERE s.`name` NOT IN ('Cardguard', 'Veribet') AND YEAR(DATE(e.`hire_date`)) > 2003;

-- 4. Delete
DELETE FROM `employees` AS e
WHERE (e.`manager_id` IS NOT NULL AND e.`manager_id` != e.`id`) AND e.`salary` >= 6000;

-- 5. Employees
SELECT `first_name`, `middle_name`, `last_name`, `salary`, `hire_date`
FROM `employees`
ORDER BY `hire_date` DESC;

-- 6. Products with old pictures
SELECT 
    p.`name` AS `product_name`,
    p.`price`,
    p.`best_before`,
    CONCAT(LEFT(p.`description`, 10), '...') AS `short_description`,
    pic.`url`
FROM
    `products` AS p
        JOIN
    `pictures` AS pic ON p.`picture_id` = pic.`id`
WHERE
    CHAR_LENGTH(p.`description`) > 100
        AND YEAR(DATE(pic.`added_on`)) < 2019
        AND p.`price` > 20
ORDER BY p.`price` DESC;

-- 7. Counts of products in stores
SELECT 
    s.`name`,
    COUNT(p.`id`) AS `product_count`,
    ROUND(AVG(p.`price`), 2) AS `avg`
FROM
    `stores` AS s
        LEFT JOIN
    `products_stores` AS ps ON s.`id` = ps.`store_id`
        LEFT JOIN
    `products` AS p ON ps.`product_id` = p.`id`
GROUP BY s.`name`
ORDER BY `product_count` DESC , `avg` DESC , s.`id` ASC;

-- 8. Specific employee
SELECT 
    CONCAT(e.`first_name`, ' ', e.`last_name`) AS `Full_name`,
    s.`name` AS `Store_name`,
    a.`name` AS `address`,
    e.`salary`
FROM
    `employees` AS e
        LEFT JOIN
    `stores` AS s ON e.`store_id` = s.`id`
        LEFT JOIN
    `addresses` AS a ON s.`address_id` = a.`id`
WHERE
    e.`salary` < 4000
        AND a.`name` LIKE '%5%'
        AND CHAR_LENGTH(s.`name`) > 8
HAVING `Full_name` LIKE '%n';

-- 9. Find all information of stores
SELECT 
	REVERSE(s.`name`) AS `reversed_name`,
	CONCAT(UPPER(t.`name`), '-', a.`name`) AS `full_address`,
	COUNT(e.`id`) AS `employees_count`
FROM `stores` AS s
LEFT JOIN `employees` AS e ON s.`id` = e.`store_id`
LEFT JOIN `addresses` AS a ON s.`address_id` = a.`id`
LEFT JOIN `towns` AS t ON a.`town_id` = t.`id`
GROUP BY s.`id`
HAVING `employees_count` >= 1
ORDER BY `full_address` ASC;

-- 10. Find name of top paid employee by store name
CREATE FUNCTION udf_top_paid_employee_by_store(store_name VARCHAR(50))
RETURNS VARCHAR(200)
DETERMINISTIC
	RETURN(SELECT 
    CONCAT(e.`first_name`,
            ' ',
            e.`middle_name`,
            '. ',
            e.`last_name`,
            ' works in store for ',
            TIMESTAMPDIFF(YEAR,
                DATE(e.`hire_date`),
                '2020-10-18'),
            ' years') AS `full_info`
FROM
    `employees` AS e
        JOIN
    `stores` AS s ON e.`store_id` = s.`id`
WHERE
    s.`name` = store_name
ORDER BY e.`salary` DESC
LIMIT 1);

-- 11. Update product price by address
CREATE PROCEDURE udp_update_product_price (address_name VARCHAR (50))
BEGIN
	IF LEFT(address_name, 1) = 0
		THEN UPDATE `products` AS p
			JOIN `products_stores` AS ps ON p.`id` = ps.`product_id`
			JOIN `stores` AS s ON ps.`store_id` = s.`id`
			JOIN `addresses` AS a ON s.`address_id` = a.`id`
			SET p.`price` = p.`price` + 100
			WHERE a.`name` = address_name;
	ELSE 
		UPDATE `products` AS p
		JOIN `products_stores` AS ps ON p.`id` = ps.`product_id`
		JOIN `stores` AS s ON ps.`store_id` = s.`id`
		JOIN `addresses` AS a ON s.`address_id` = a.`id`
		SET p.`price` = p.`price` + 200
		WHERE a.`name` = address_name;
	END IF;
END