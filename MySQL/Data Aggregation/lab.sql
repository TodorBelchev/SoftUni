-- 1. Departments Info
SELECT 
    `department_id`,
    COUNT(`id`) AS `Number of employees`
FROM
    `employees`
GROUP BY `department_id`
ORDER BY `department_id` ASC , COUNT(`id`) ASC;

-- 2. Average Salary
SELECT 
    `department_id`,
    ROUND(AVG(`salary`), 2) AS `Average Salary`
FROM
    `employees`
GROUP BY `department_id`
ORDER BY `department_id` ASC;

-- 3. Min Salary
SELECT 
    `department_id`,
    ROUND(MIN(`salary`), 2) AS `Min Salary`
FROM
    `employees`
WHERE
    `salary` > 800
GROUP BY `department_id`
ORDER BY `department_id` ASC
LIMIT 1;

-- 4. Appetizers Count
SELECT 
    COUNT(`id`) AS `Appetizers`
FROM
    `products`
WHERE
    `price` > 8 AND `category_id` = 2
GROUP BY `category_id`;

-- 5. Menu Prices
SELECT 
    `category_id`,
    ROUND(AVG(`price`), 2) AS `Average Price`,
    ROUND(MIN(`price`), 2) AS `Cheapest Product`,
    ROUND(MAX(`price`), 2) AS `Most Expensive Product`
FROM
    `products`
GROUP BY `category_id`
ORDER BY `category_id` ASC;