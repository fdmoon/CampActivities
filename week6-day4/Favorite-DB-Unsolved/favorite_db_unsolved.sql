-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(50),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
  film VARCHAR(50) NOT NULL, 
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT FALSE,
  -- Make an integer column called "score" --
  score INTEGER(10)
  -- Set the primary key of the table to id --
);

SELECT * FROM favorite_db.favorite_movies;

USE animals_db;
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jim", true, "Hoola", 14);
INSERT INTO people (name, has_pet)
VALUES ("Felix", false);

SELECT * FROM animals_db.people;

UPDATE people
SET has_pet = true, pet_name = "Ari", pet_age = 2
WHERE name = "Felix";

-- Instructions
-- It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!
-- Try to add at least three rows of data to each table.
-- BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.
-- BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row
-- BONUS: Look into the concept of making a column the "primary key"
-- ULTRA BONUS: Try to create a column called "id" in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added.

USE favorite_db;

INSERT INTO favorite_foods (food, score) VALUES ("Hamburger", 3);
INSERT INTO favorite_foods (food, score) VALUES ("Pizza", 6);
INSERT INTO favorite_foods (food, score) VALUES ("Pasta", 7);

INSERT INTO favorite_movies (film, five_times, score) VALUES ("SCREAM", false, 6);
INSERT INTO favorite_movies (film, five_times, score) VALUES ("The Lion King", true, 8);
INSERT INTO favorite_movies (film, five_times, score) VALUES ("Inside Out", true, 9);

INSERT INTO favorite_songs (song, artist, score) VALUES ("1111", "artist1", 7);
INSERT INTO favorite_songs (song, artist, score) VALUES ("2222", "artist2", 8);
INSERT INTO favorite_songs (song, artist, score) VALUES ("3333", "artist3", 9);

select * from favorite_foods;
select * from favorite_movies;
select * from favorite_songs;

CREATE TABLE primary_test (
    ID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int DEFAULT 20,
    PRIMARY KEY (ID)
    -- CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);

insert into primary_test (LastName, FirstName, Age) values ("Moon", "Felix", 40);
select * from primary_test;

insert into primary_test (ID, LastName, FirstName, Age) values (6, "Moon", "Felix", 40);
insert into primary_test (LastName, FirstName) values ("Moon", "Felix");
select * from primary_test;

