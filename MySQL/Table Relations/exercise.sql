-- 1. One-To-One Relationship
CREATE TABLE `passports`
(
	`passport_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `passport_number` VARCHAR(8) NOT NULL UNIQUE
) AUTO_INCREMENT = 101;

CREATE TABLE `people`
(
	`person_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `salary` DECIMAL(10,2),
    `passport_id` INT,
    CONSTRAINT `fk_people_passports`
    FOREIGN KEY(`passport_id`)
    REFERENCES `passports`(`passport_id`)
);

INSERT INTO `passports`
VALUES
(101, 'N34FG21B'),
(102, 'K65LO4R7'),
(103, 'ZE657QP2');

INSERT INTO `people`
VALUES
(1, 'Roberto', 43300.00, 102),
(2, 'Tom', 56100.00, 103),
(3, 'Yana', 60200.00, 101);

-- 2. One-To-Many Relationship
CREATE TABLE `manufacturers`
(
	`manufacturer_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `established_on` DATE NOT NULL
);

CREATE TABLE `models`
(
	`model_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `manufacturer_id` INT NOT NULL,
    CONSTRAINT `fk_models_manufaturers`
    FOREIGN KEY (`manufacturer_id`)
    REFERENCES `manufacturers`(`manufacturer_id`)
) AUTO_INCREMENT=101;

INSERT INTO `manufacturers`
VALUES
(1, 'BMW', '1916-03-01'),
(2, 'Tesla', '2003-01-01'),
(3, 'Lada', '1966-05-01');

INSERT INTO `models`
VALUES
(101, 'X1', 1),
(102, 'i6', 1),
(103, 'Model S', 2),
(104, 'Model X', 2),
(105, 'Model 3', 2),
(106, 'Nova', 3);

-- 3. Many-To-Many Relationship
CREATE TABLE `students` (
    `student_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
);

CREATE TABLE `exams` (
    `exam_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
)  AUTO_INCREMENT=101;

CREATE TABLE `students_exams` (
	`student_id` INT NOT NULL,
    `exam_id` INT NOT NULL,
    CONSTRAINT `pk_students_exams`
    PRIMARY KEY (`student_id`, `exam_id`),
    CONSTRAINT `fk_students_exams_students`
    FOREIGN KEY (`student_id`)
    REFERENCES `students`(`student_id`),
    CONSTRAINT `fk_students_exams_exams`
    FOREIGN KEY (`exam_id`)
    REFERENCES `exams`(`exam_id`)
);

INSERT INTO `students`
VALUES
(1, 'Mila'),
(2, 'Toni'),
(3, 'Ron');

INSERT INTO `exams`
VALUES
(101, 'Spring MVC'),
(102, 'Neo4j'),
(103, 'Oracle 11g');

INSERT INTO `students_exams`
VALUES
(1, 101),
(1, 102),
(2, 101),
(3, 103),
(2, 102),
(2, 103);

-- 4. Self-Referencing
CREATE TABLE `teachers`(
	`teacher_id` INT NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `manager_id` INT
) AUTO_INCREMENT=101;

INSERT INTO `teachers`
VALUES
(101, 'John', NULL),
(102, 'Maya', 106),
(103, 'Silvia', 106),
(104, 'Ted', 105),
(105, 'Mark', 101),
(106, 'Greta', 101);

ALTER TABLE `teachers`
ADD CONSTRAINT `pk_teachers`
PRIMARY KEY(`teacher_id`),
ADD CONSTRAINT `fk_teachers_managers`
FOREIGN KEY (`manager_id`)
REFERENCES `teachers`(`teacher_id`);