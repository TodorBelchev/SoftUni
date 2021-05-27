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

-- 06. Find All Different Employee’s Salaries
SELECT DISTINCT `salary`
FROM `employees`
ORDER BY `employee_id`;

-- 07. Find all Information About Employees
SELECT * FROM `employees`
WHERE `job_title` = 'Sales Representative'
ORDER BY `employee_id`;

-- 08. Find Names of All Employees by Salary in Range
SELECT `first_name`, `last_name`, `job_title`
FROM `employees`
WHERE `salary` >= 20000 AND `salary` <= 30000
ORDER BY `employee_id`;

-- 9. Find Names of All Employees
SELECT CONCAT_WS(' ', `first_name`, `middle_name`, `last_name`) AS 'Full Name'
FROM `employees`
WHERE `salary` IN(25000, 14000, 12500, 23600);

-- 10. Find All Employees Without Manager
SELECT `first_name`, `last_name`
FROM `employees`
WHERE `manager_id` IS NULL;