-- 1. Count Employees by Town
CREATE FUNCTION ufn_count_employees_by_town(town_name VARCHAR(20))
RETURNS INT
RETURN (
		SELECT COUNT(e.employee_id) 
		FROM `employees` AS e
			JOIN `addresses` AS a ON a.address_id = e.address_id
			JOIN `towns` AS t ON t.town_id = a.town_id
        WHERE t.name = town_name
);

-- 2. Employees Promotion
CREATE PROCEDURE usp_raise_salaries(department_name VARCHAR(50))
BEGIN
	UPDATE `employees` AS e
    JOIN `departments` AS d ON e.`department_id` = d.`department_id`
    SET e.`salary` = e.`salary` * 1.05
    WHERE d.`name` = department_name;
END

-- 3. Employees Promotion By ID
CREATE PROCEDURE usp_raise_salary_by_id(id INT)
BEGIN
	UPDATE `employees`
    SET `salary` = `salary` * 1.05
    WHERE `employee_id` = id;
END

-- 4. Triggered
CREATE TABLE `deleted_employees`(
	`employee_id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(20),
    `last_name` VARCHAR(20),
    `middle_name` VARCHAR(20),
    `job_title` VARCHAR(50),
    `department_id` INT,
    `salary` DECIMAL
);


CREATE TRIGGER tr_deleted_employees
AFTER DELETE ON `employees`
FOR EACH ROW
BEGIN
	INSERT INTO `deleted_employees`
    (`first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `salary`)
    VALUES
    (OLD.`first_name`, OLD.`last_name`, OLD.`middle_name`, OLD.`job_title`, OLD.`department_id`, OLD.`salary`);
END