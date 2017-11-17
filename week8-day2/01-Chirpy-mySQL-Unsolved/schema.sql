CREATE DATABASE chirpy_db;
USE chirpy_db;

CREATE TABLE `chirps` (
	id int NOT NULL AUTO_INCREMENT,
	author varchar(32) NOT NULL,
	chirp varchar(255) NOT NULL,
	time datetime,
	PRIMARY KEY (id)
);

insert into chirps (author, chirp, time) VALUES ('Felix', 'Hi', now());

