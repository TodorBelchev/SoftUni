-- 01. Find All Information About Departments
SELECT * FROM `departments`
ORDER BY `department_id`;

-- 02. Find all Department Names
SELECT `name` FROM `departments`
ORDER BY `department_id`;

-- 03. Find Salary of Each Employee
SELECT `first_name`, `last_name`, `salary`
FROM `employees`
ORDER BY `employee_id`;

-- 04. Find Full Name of Each Employee
SELECT `first_name`, `middle_name`, `last_name`
FROM `employees`
ORDER BY `employee_id`;

-- 05. Find Email Address of Each Employee
SELECT CONCAT(`first_name`, '.', `last_name`,'@softuni.bg') AS `full_email_address`
FROM `employees`;