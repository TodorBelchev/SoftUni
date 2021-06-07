CREATE DATABASE `fsd`;
USE `fsd`;

-- 01. Table Design
CREATE TABLE `coaches`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(10) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `salary` DECIMAL(10,2) NOT NULL DEFAULT 0,
    `coach_level` INT NOT NULL DEFAULT 0
);

CREATE TABLE `countries`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE `towns`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `country_id` INT NOT NULL,
    CONSTRAINT `fk_towns_countries`
    FOREIGN KEY (`country_id`)
    REFERENCES `countries`(`id`)
);

CREATE TABLE `stadiums`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `name` VARCHAR(45) NOT NULL,
     `capacity` INT NOT NULL,
     `town_id` INT NOT NULL,
     CONSTRAINT `fk_stadiums_towns`
     FOREIGN KEY (`town_id`)
     REFERENCES `towns`(`id`)
);

CREATE TABLE `teams`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `name` VARCHAR(45) NOT NULL,
     `established` DATE NOT NULL,
     `fan_base` BIGINT(20) NOT NULL DEFAULT 0,
     `stadium_id` INT NOT NULL,
     CONSTRAINT `fk_teams_stadiums`
     FOREIGN KEY (`stadium_id`)
     REFERENCES `stadiums`(`id`)
);

CREATE TABLE `skills_data`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `dribbling` INT DEFAULT 0,
    `pace` INT DEFAULT 0,
    `passing` INT DEFAULT 0,
    `shooting` INT DEFAULT 0,
    `speed` INT DEFAULT 0,
    `strength` INT DEFAULT 0
);

CREATE TABLE `players`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(10) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `age` INT NOT NULL DEFAULT 0,
    `position` CHAR(1) NOT NULL,
    `salary` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `hire_date` DATETIME,
    `skills_data_id` INT NOT NULL,
    `team_id` INT,
    CONSTRAINT `fk_players_skills_data`
    FOREIGN KEY (`skills_data_id`)
    REFERENCES `skills_data`(`id`),
    CONSTRAINT `fk_players_teams`
    FOREIGN KEY (`team_id`)
    REFERENCES `teams`(`id`)
);

CREATE TABLE `players_coaches`(
	`player_id` INT NOT NULL,
    `coach_id` INT NOT NULL,
    CONSTRAINT PRIMARY KEY(`player_id`, `coach_id`),
    CONSTRAINT `fk_players_coaches_players`
    FOREIGN KEY (`player_id`)
    REFERENCES `players`(`id`),
    CONSTRAINT `fk_players_coaches_coaches`
    FOREIGN KEY (`coach_id`)
    REFERENCES `coaches`(`id`)
);

-- 02. Insert
INSERT INTO `coaches` (`first_name`, `last_name`, `salary`, `coach_level`)
SELECT `first_name`, `last_name`, `salary` * 2, CHAR_LENGTH(`first_name`)
FROM `players`
WHERE `age` >= 45;

-- 03. Update
UPDATE `coaches`
SET `coach_level` = `coach_level` + 1
WHERE LEFT(`first_name`, 1) = 'A' AND `id` IN (SELECT `coach_id` FROM `players_coaches`);

-- 04. Delete
DELETE FROM `players`
WHERE `age` >= 45;

-- 05. Players
SELECT `first_name`, `age`, `salary`
FROM `players`
ORDER BY `salary` DESC;

-- 06. Young offense players without contract
SELECT 
	`id`,
    CONCAT(`first_name`, ' ', `last_name`) AS `full_name`,
    `age`,
    `position`,
    `hire_date`
FROM
    `players`
WHERE
    `age` < 23 AND `position` = 'A'
        AND `hire_date` IS NULL
        AND (SELECT 
            `strength`
        FROM
            `skills_data`
        WHERE
            `skills_data_id` = `id`) > 50
ORDER BY `salary` ASC , `age` ASC;

-- 07. Detail info for all teams
SELECT 
    `name`,
    `established`,
    `fan_base`,
    (SELECT 
            COUNT(`id`)
        FROM
            `players`
        WHERE
            `team_id` = `teams`.`id`) AS `count`
FROM
    `teams`
ORDER BY `count` DESC , `fan_base` DESC;

-- 08. The fastest player by towns
SELECT 
    MAX(`sd`.speed) AS `max_speed`, `t`.`name`
FROM
    `towns` AS `t`
        LEFT JOIN
    `stadiums` AS `s` ON `t`.`id` = `s`.`town_id`
        LEFT JOIN
    `teams` AS `te` ON `te`.`stadium_id` = `s`.`id`
        LEFT JOIN
    `players` AS `p` ON `p`.`team_id` = `te`.`id`
        LEFT JOIN
    `skills_data` AS `sd` ON `sd`.`id` = `p`.`skills_data_id`
WHERE
    `te`.`name` != 'Devify'
GROUP BY `t`.`id`
ORDER BY `max_speed` DESC , `t`.`name` ASC;

-- 09. Total salaries and players by country
SELECT 
    `c`.`name`,
    COUNT(`p`.`id`) AS `total_count_of_players`,
    SUM(`p`.`salary`) AS `total_sum_of_salaries`
FROM
    `countries` AS `c`
        LEFT JOIN
    `towns` AS `t` ON `c`.`id` = `t`.`country_id`
        LEFT JOIN
    `stadiums` AS `s` ON `t`.`id` = `s`.`town_id`
        LEFT JOIN
    `teams` AS `te` ON `te`.`stadium_id` = `s`.`id`
        LEFT JOIN
    `players` AS `p` ON `p`.`team_id` = `te`.`id`
GROUP BY `c`.`id`
ORDER BY `total_count_of_players` DESC , `c`.`name` ASC;

-- 10. Find all players that play on stadium
CREATE FUNCTION udf_stadium_players_count (stadium_name VARCHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (SELECT COUNT(`p`.`id`)
	FROM `stadiums` AS `s`
	LEFT JOIN `teams` AS `t`
    ON `t`.`stadium_id` = `s`.`id`
	LEFT JOIN `players` AS `p`
    ON `p`.`team_id` = `t`.`id`
	WHERE `s`.`name` = stadium_name);
END;

-- 11. Find good playmaker by teams
CREATE PROCEDURE udp_find_playmaker (`min_dribble` INT, `team_name` VARCHAR(45))
BEGIN
SELECT 
    CONCAT(`first_name`, ' ', `last_name`) AS `full_name`,
    `age`,
    `salary`,
    `sd`.`dribbling` AS `dribbling`,
    `sd`.`speed` AS `speed`,
    `t`.`name` AS `team_name`
FROM
    `players`
        LEFT JOIN
    `teams` AS `t` ON `players`.`team_id` = `t`.`id`
        LEFT JOIN
    `skills_data` AS `sd` ON `sd`.`id` = `players`.`skills_data_id`
WHERE
    (SELECT 
            AVG(`speed`)
        FROM
            `skills_data`) < `speed`
        AND `dribbling` > `min_dribble`
        AND `t`.`name` = `team_name`
ORDER BY `speed` DESC
LIMIT 1;
END;