DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;

CREATE TABLE item_info (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	name VARCHAR(100) NOT NULL,
	type VARCHAR(100) NOT NULL,
	starting_price DECIMAL(6,2) NOT NULL,
	highest_price DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO item_info (name, type, starting_price, highest_price) values ('shoes', 'footwear', 4.00, 10.00);

select * from item_info;

