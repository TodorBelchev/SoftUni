-- 1. Table Design
CREATE TABLE `planets`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL
);

CREATE TABLE `spaceports`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
     `name` VARCHAR(50) NOT NULL,
     `planet_id` INT,
     CONSTRAINT fk_spaceports_planets
     FOREIGN KEY(`planet_id`)
     REFERENCES `planets`(`id`)
);

CREATE TABLE `spaceships`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`manufacturer` VARCHAR(30) NOT NULL,
    `light_speed_rate` INT DEFAULT 0
);

CREATE TABLE `colonists`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `ucn` CHAR(10) NOT NULL UNIQUE,
    `birth_date` DATE NOT NULL
);

CREATE TABLE `journeys`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `journey_start` DATETIME NOT NULL,
    `journey_end` DATETIME NOT NULL,
    `purpose` ENUM('Medical', 'Technical', 'Educational', 'Military') NOT NULL,
    `destination_spaceport_id` INT,
    `spaceship_id` INT,
    CONSTRAINT fk_journeys_spaceports
    FOREIGN KEY (`destination_spaceport_id`)
    REFERENCES `spaceports`(`id`),
    CONSTRAINT fk_journeys_spaceships
    FOREIGN KEY (`spaceship_id`)
    REFERENCES `spaceships`(`id`)
);

CREATE TABLE `travel_cards`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `card_number` CHAR(10) NOT NULL UNIQUE,
    `job_during_journey` ENUM('Pilot', 'Engineer', 'Trooper', 'Cleaner', 'Cook') NOT NULL,
    `colonist_id` INT,
    `journey_id` INT,
    CONSTRAINT fk_travel_cards_colonists
    FOREIGN KEY (`colonist_id`)
    REFERENCES `colonists`(`id`),
    CONSTRAINT fk_travel_cards_journeys
    FOREIGN KEY (`journey_id`)
    REFERENCES `journeys`(`id`)
);

-- 2. Insert
INSERT INTO `travel_cards`
	(`card_number`,
	`job_during_journey`,
	`colonist_id`,
	`journey_id`)
(SELECT 
	CASE
		WHEN `birth_date` > '1980-01-01'
			THEN CONCAT(YEAR(`birth_date`), DAY(`birth_date`), LEFT(`ucn`, 4))
            ELSE CONCAT(YEAR(`birth_date`), MONTH(`birth_date`), RIGHT(`ucn`, 4))
		END,
	CASE
		WHEN `id` % 2 = 0 THEN 'Pilot'
        WHEN `id` % 3 = 0 THEN 'Cook'
        ELSE 'Engineer'
	END,
    `id`,
    LEFT(`ucn`, 1)
	FROM `colonists`
	WHERE `id` BETWEEN 96 AND 100);

-- 3. Update    
UPDATE `journeys`
SET `purpose` =
	CASE
		WHEN `id` % 2 = 0 THEN 'Medical'
		WHEN `id` % 3 = 0 THEN 'Technical'
		WHEN `id` % 5 = 0 THEN 'Educational'
		WHEN `id` % 7 = 0 THEN 'Military'
		ELSE `purpose`
	END;

-- 4. Delete
DELETE FROM `colonists`
WHERE `id` NOT IN (
	SELECT `colonist_id` FROM `travel_cards`
);

-- 5. Extract all travel cards
SELECT `card_number`, `job_during_journey`
FROM `travel_cards`
ORDER BY `card_number` ASC;

-- 6. Extract all colonists
SELECT
    `id`,
    CONCAT(`first_name`, ' ', `last_name`) AS `full_name`,
    `ucn`
FROM `colonists`
ORDER BY `first_name` ASC, `last_name` ASC, `id` ASC;

-- 7. Extract all military journeys
SELECT `id`, `journey_start`, `journey_end`
FROM `journeys`
WHERE `purpose` = 'Military'
ORDER BY `journey_start` ASC;

-- 8. Extract all pilots
SELECT 
    c.`id`,
    CONCAT(c.`first_name`, ' ', c.`last_name`) AS `full_name`
FROM
    `colonists` AS c
        JOIN
    `travel_cards` AS tc ON c.`id` = tc.`colonist_id`
WHERE
    `job_during_journey` = 'Pilot'
ORDER BY `id` ASC;

-- 9. Count all colonists
SELECT 
    COUNT(*)
FROM
    `colonists` AS c
        JOIN
    `travel_cards` AS tc ON c.`id` = tc.`colonist_id`
        JOIN
    `journeys` AS j ON tc.`journey_id` = j.`id`
WHERE
    `purpose` = 'Technical';

-- 10. Extract the fastest spaceship
SELECT 
    s.`name`, sp.`name`
FROM
    `spaceships` AS s
        JOIN
    `journeys` AS j ON s.`id` = j.`spaceship_id`
        JOIN
    `spaceports` AS sp ON j.`destination_spaceport_id` = sp.`id`
ORDER BY s.`light_speed_rate` DESC
LIMIT 1;

-- 11. Extract - pilots younger than 30 years
SELECT 
    s.`name`, s.`manufacturer`
FROM
    `spaceships` AS s
        JOIN
    `journeys` AS j ON s.`id` = j.`spaceship_id`
        JOIN
    `travel_cards` AS t ON j.`id` = t.`journey_id`
        JOIN
    `colonists` AS c ON c.`id` = t.`colonist_id`
WHERE
    t.`job_during_journey` = 'Pilot'
        AND YEAR(`birth_date`) > YEAR('1989-01-01')
ORDER BY s.`name` ASC;

-- 12. Extract all educational mission
SELECT 
    p.`name`, s.`name`
FROM
    `planets` AS p
        JOIN
    `spaceports` AS s ON p.`id` = s.`planet_id`
        JOIN
    `journeys` AS j ON s.`id` = j.`destination_spaceport_id`
WHERE
    j.`purpose` = 'Educational'
ORDER BY s.`name` DESC;

-- 13. Extract all planets and their journey count
SELECT 
    p.`name`, COUNT(j.`id`) AS `journeys_count`
FROM
    `planets` AS p
        JOIN
    `spaceports` AS s ON p.`id` = s.`planet_id`
        JOIN
    `journeys` AS j ON s.`id` = j.`destination_spaceport_id`
GROUP BY p.`name`
ORDER BY `journeys_count` DESC , p.`name` ASC;

-- 14. Extract the shortest journey
SELECT 
    j.`id`,
    p.`name` AS `planet_name`,
    s.`name` AS `spaceport_name`,
    j.`purpose` AS `journey_purpose`
FROM
    `planets` AS p
        JOIN
    `spaceports` AS s ON p.`id` = s.`planet_id`
        JOIN
    (SELECT 
        `id`,
            `journey_end` - `journey_start` AS `diff`,
            `destination_spaceport_id`,
            `purpose`
    FROM
        `journeys`
    GROUP BY `id`
    ORDER BY `diff` ASC
    LIMIT 1) AS j ON s.`id` = j.`destination_spaceport_id`;

-- 15. Extract the less popular job
SELECT 
    t.`job_during_journey`
FROM
    `travel_cards` AS t
        JOIN
    (SELECT 
        `id`, `journey_end` - `journey_start` AS `diff`
    FROM
        `journeys`
    GROUP BY `id`
    ORDER BY `diff` DESC
    LIMIT 1) AS j ON t.`journey_id` = j.`id`
GROUP BY t.`job_during_journey`
ORDER BY COUNT(j.`id`) ASC
LIMIT 1;

-- 16. Get colonists count
CREATE FUNCTION udf_count_colonists_by_destination_planet (planet_name VARCHAR (30))
RETURNS INT
DETERMINISTIC
	RETURN(
		SELECT COUNT(*)
	FROM `planets` AS p
	JOIN `spaceports` AS s ON p.`id` = s.`planet_id`
	JOIN `journeys` AS j ON s.`id` = j.`destination_spaceport_id`
	JOIN `travel_cards` AS t ON j.`id` = t.`journey_id`
	JOIN `colonists` AS c ON t.`colonist_id` = c.`id`
	WHERE p.`name` = planet_name
    );

-- 17. Modify spaceship
DELIMITER $$
CREATE PROCEDURE udp_modify_spaceship_light_speed_rate(spaceship_name VARCHAR(50), light_speed_rate_increase INT(11)) 
BEGIN START TRANSACTION;
	IF spaceship_name NOT IN (SELECT `name` FROM `spaceships`)
		THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Spaceship you are trying to modify does not exists.';
		ROLLBACK;
	ELSE
		UPDATE `spaceships`
        SET `light_speed_rate` = `light_speed_rate` + light_speed_rate_increase
        WHERE `name` = spaceship_name AND `id` >= 1;
    END IF;
END $$