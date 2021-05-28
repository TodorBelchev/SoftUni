-- 01. Find Book Titles
SELECT `title` FROM `books`
WHERE SUBSTRING(`title`, 1, 3) = 'The';

-- 02. Replace Titles
SELECT REPLACE (`title`, 'The', '***') as `title`
FROM `books`
WHERE SUBSTRING(`title`, 1, 3) = 'The'
ORDER BY `id`;

-- 03. Sum Cost of All Books
SELECT FORMAT(SUM(`cost`), 2)
AS `cost`
FROM `books`;

-- 04. Days Lived
SELECT CONCAT(`first_name`, ' ', `last_name`) AS `Full Name`,
TIMESTAMPDIFF(DAY, `born`, `died`) AS `Days Lived`
FROM `authors`;

-- 05. Harry Potter Books
SELECT `title`
FROM `books`
WHERE `title` LIKE 'Harry Potter%'
ORDER BY `id`;