-- Instructions
-- Create a seinfeld_db database with an actors table.
-- The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
-- Add in four actors with different names, coolness_points, and attitudes.

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id int AUTO_INCREMENT NOT NULL,
	name varchar(50) NOT NULL,
	coolness_points int NOT NULL,
	attitude varchar(300),
    primary key (id)
);

INSERT INTO actors (name, coolness_points, attitude)
VALUES ('Jerry Seinfeld', 10, 'He is often depicted as the voice of reason amidst the general insanity generated by the people in his world');

INSERT INTO actors (name, coolness_points, attitude)
VALUES ('Elaine Benes', 6, 'She is attractive and genial, while also being humorous, arrogant and occasionally impulsive.');

INSERT INTO actors (name, coolness_points, attitude)
VALUES ('Cosmo Kramer', 8, 'His trademarks include his humorous upright pompadour hairstyle, vintage clothes, and energetic sliding bursts through Jerry\'s apartment door.');

INSERT INTO actors (name, coolness_points, attitude)
VALUES ('George Costanza', 4, 'He is miserly, dishonest, petty and envious of others\' achievements.');

