-- 1. Managers
SELECT 
    e.`employee_id`,
    CONCAT(e.`first_name`, ' ', e.`last_name`) AS `full_name`,
    d.`department_id`,
    d.`name` AS `department_name`
FROM
    `employees` AS e
        JOIN
    `departments` AS d ON e.`employee_id` = d.`manager_id`
ORDER BY e.`employee_id`
LIMIT 5;

-- 2. Towns and Addresses
SELECT 
    t.`town_id`, t.`name`, a.`address_text`
FROM
    `towns` AS t
        JOIN
    `addresses` AS a ON t.`town_id` = a.`town_id`
WHERE
    t.`name` IN ('San Francisco' , 'Sofia', 'Carnation')
ORDER BY t.`town_id` ASC , a.`address_id` ASC;