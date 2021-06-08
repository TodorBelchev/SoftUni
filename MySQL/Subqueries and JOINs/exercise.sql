-- 01. Employee Address
SELECT 
    e.`employee_id`,
    e.`job_title`,
    a.`address_id`,
    a.`address_text`
FROM
    `employees` AS e
        JOIN
    `addresses` AS a ON e.`address_id` = a.`address_id`
ORDER BY a.`address_id` ASC
LIMIT 5;

-- 02. Addresses with Towns
SELECT 
    e.`first_name`,
    e.`last_name`,
    t.`name` AS `town`,
    a.`address_text`
FROM
    `employees` AS e
        JOIN
    `addresses` AS a ON e.`address_id` = a.`address_id`
        JOIN
    `towns` AS t ON a.`town_id` = t.`town_id`
ORDER BY e.`first_name` ASC , e.`last_name` ASC
LIMIT 5;

-- 03. Sales Employee
SELECT 
    e.`employee_id`,
    e.`first_name`,
    e.`last_name`,
    d.`name` AS `department_name`
FROM
    `employees` AS e
        JOIN
    `departments` AS d ON e.`department_id` = d.`department_id`
WHERE
    d.`name` = 'Sales'
ORDER BY e.`employee_id` DESC;

-- 04. Employee Departments
SELECT 
    e.`employee_id`,
    e.`first_name`,
    e.`salary`,
    d.`name` AS `department_name`
FROM
    `employees` AS e
        JOIN
    `departments` AS d ON e.`department_id` = d.`department_id`
WHERE
    e.`salary` > 15000
ORDER BY d.`department_id` DESC
LIMIT 5;

-- 05. Employees Without Project
SELECT 
    e.`employee_id`, e.`first_name`
FROM
    `employees` AS e
WHERE
    e.`employee_id` NOT IN (SELECT 
            `employee_id`
        FROM
            `employees_projects`)
ORDER BY e.`employee_id` DESC
LIMIT 3;

-- 06. Employees Hired After
SELECT 
    e.`first_name`,
    e.`last_name`,
    e.`hire_date`,
    d.`name` AS `dept_name`
FROM
    `employees` AS e
        JOIN
    `departments` AS d ON e.`department_id` = d.`department_id`
WHERE
    DATE(e.`hire_date`) > '1999-01-01'
        AND d.`name` IN ('Sales' , 'Finance')
ORDER BY e.`hire_date` ASC;

-- 07. Employees with Project
SELECT 
    e.`employee_id`, e.`first_name`, p.`name` AS `project_name`
FROM
    `employees` AS e
        JOIN
    `employees_projects` AS ep ON e.`employee_id` = ep.`employee_id`
        JOIN
    `projects` AS p ON ep.`project_id` = p.`project_id`
WHERE
    DATE(p.`start_date`) > '2002-08-13'
        AND p.`end_date` IS NULL
ORDER BY e.`first_name` ASC , p.`name` ASC
LIMIT 5;

-- 08. Employee 24
SELECT 
    e.`employee_id`,
    e.`first_name`,
    IF(YEAR(p.`start_date`) > 2004,
        NULL,
        p.`name`) AS `project_name`
FROM
    `employees` AS e
        JOIN
    `employees_projects` AS ep ON e.`employee_id` = ep.`employee_id`
        JOIN
    `projects` AS p ON ep.`project_id` = p.`project_id`
WHERE
    e.`employee_id` = 24
ORDER BY p.`name` ASC;

-- 09. Employee Manager
SELECT 
    e.`employee_id`,
    e.`first_name`,
    e.`manager_id`,
    e2.`first_name` AS `manager_name`
FROM
    `employees` AS e
        JOIN
    `employees` AS e2 ON e.`manager_id` = e2.`employee_id`
WHERE
    e2.`employee_id` IN (3 , 7)
ORDER BY e.`first_name` ASC;

-- 10. Employee Summary
SELECT 
    e.`employee_id`,
    CONCAT(e.`first_name`, ' ', e.`last_name`) AS `employee_name`,
    CONCAT(e2.`first_name`, ' ', e2.`last_name`) AS `manager_name`,
    d.`name` AS `department_name`
FROM
    `employees` AS e
        JOIN
    `employees` AS e2 ON e.`manager_id` = e2.`employee_id`
        JOIN
    `departments` AS d ON e.`department_id` = d.`department_id`
ORDER BY e.`employee_id` ASC
LIMIT 5;

-- 11. Min Average Salary
SELECT 
    AVG(`employees`.`salary`) AS `min_average_salary`
FROM
    `employees`
GROUP BY `department_id`
ORDER BY `min_average_salary`
LIMIT 1;

-- 12. Highest Peaks in Bulgaria
SELECT 
    mc.`country_code`,
    m.`mountain_range`,
    p.`peak_name`,
    p.`elevation`
FROM
    `mountains` AS m
        JOIN
    `peaks` AS p ON m.`id` = p.`mountain_id`
        JOIN
    `mountains_countries` AS mc ON m.`id` = mc.`mountain_id`
WHERE
    mc.`country_code` = 'BG'
        AND p.`elevation` > 2835
ORDER BY p.`elevation` DESC;