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