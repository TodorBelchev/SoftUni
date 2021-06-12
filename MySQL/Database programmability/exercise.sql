-- 1. Employees with Salary Above 35000
CREATE PROCEDURE usp_get_employees_salary_above_35000()
BEGIN
	SELECT `first_name`, `last_name`
	FROM `employees`
	WHERE `salary` > 35000
	ORDER BY `first_name` ASC, `last_name` ASC, `employee_id` ASC;
END

-- 2. Employees with Salary Above Number
CREATE PROCEDURE usp_get_employees_salary_above(target_salary DECIMAL(10, 4))
BEGIN
	SELECT `first_name`, `last_name`
	FROM `employees`
	WHERE `salary` >= target_salary
	ORDER BY `first_name` ASC, `last_name` ASC, `employee_id` ASC;
END

-- 3. Town Names Starting With
CREATE PROCEDURE usp_get_towns_starting_with(starting_string VARCHAR(10))
BEGIN
	SELECT `name`
	FROM `towns`
	WHERE LEFT(`name`, CHAR_LENGTH(starting_string)) = starting_string
	ORDER BY `name` ASC;
END

-- 4. Employees from Town
CREATE PROCEDURE usp_get_employees_from_town(town_name VARCHAR(10))
BEGIN
	SELECT `first_name`, `last_name`
	FROM `employees` AS e
	JOIN `addresses` AS a ON e.`address_id` = a.`address_id`
	JOIN `towns` AS t ON a.`town_id` = t.`town_id`
	WHERE t.`name` = town_name
ORDER BY e.`first_name` ASC, e.`last_name` ASC;
END

-- 5. Salary Level Function
CREATE FUNCTION ufn_get_salary_level(salary_input DECIMAL(10,4))
RETURNS VARCHAR(7)
DETERMINISTIC
	RETURN(
		CASE
			WHEN salary_input < 30000 THEN 'Low'
            WHEN salary_input <= 50000 THEN 'Average'
            ELSE 'High'
		END
    );

-- 6. Employees by Salary Level
CREATE PROCEDURE usp_get_employees_by_salary_level(salary_level VARCHAR(7))
BEGIN
	SELECT `first_name`, `last_name`
	FROM `employees`
    WHERE `salary` < 30000 AND salary_level = 'low'
    OR `salary` >= 30000 AND `salary` <= 50000 AND salary_level = 'average'
    OR `salary` > 50000 AND salary_level = 'high'
    ORDER BY `first_name` DESC, `last_name` DESC;
END

-- 7. Define Function
CREATE FUNCTION ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50))
RETURNS BIT
RETURN word REGEXP (concat('^[', set_of_letters, ']+$'));

-- 8. Find Full Name
CREATE PROCEDURE usp_get_holders_full_name()
BEGIN
	SELECT CONCAT(`first_name`, ' ', `last_name`) AS `full_name`
	FROM `account_holders`
	ORDER BY `full_name` ASC;
END

-- 9. People with Balance Higher Than
CREATE PROCEDURE usp_get_holders_with_balance_higher_than(salary_input DECIMAL(19,4))
BEGIN
	SELECT ah.`first_name`, ah.`last_name`
	FROM `account_holders` AS ah
	JOIN `accounts` AS a ON ah.`id` = a.`account_holder_id`
	GROUP BY ah.`id`
	HAVING SUM(a.`balance`) > salary_input
	ORDER BY ah.`id` ASC;
END

-- 10. Future Value Function
CREATE FUNCTION ufn_calculate_future_value(sum DECIMAL(10, 4), interest_rate DECIMAL(10, 4), years INT)
RETURNS DECIMAL(10, 4)
DETERMINISTIC
BEGIN
	RETURN sum * POW((1 + interest_rate), years);
END