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