-- 1. Records' Count
SELECT
    COUNT(`id`) AS `count`
FROM `wizzard_deposits`;

-- 2. Longest Magic Wand
SELECT
    MAX(`magic_wand_size`) AS `longest_magic_wand`
FROM `wizzard_deposits`;

-- 3. Longest Magic Wand Per Deposit Groups
SELECT 
    `deposit_group`,
    MAX(`magic_wand_size`) AS `longest_magic_wand`
FROM
    `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY `longest_magic_wand` ASC , `deposit_group` ASC;

-- 4. Smallest Deposit Group Per Magic Wand Size*
SELECT 
    `deposit_group`
FROM
    `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY AVG(`magic_wand_size`) ASC
LIMIT 1;

-- 5. Deposits Sum
SELECT 
    `deposit_group`,
    SUM(`deposit_amount`) AS `total_sum`
FROM
    `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY `total_sum`;