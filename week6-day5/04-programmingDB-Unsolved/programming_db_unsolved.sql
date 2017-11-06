-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
use programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,

  -- Create a string column called programming_languages"language" --
  language VARCHAR(30) NOT NULL,

  -- Create an integer column cprimary_testprimary_testalled "rating" --
  rating INTEGER(6),

  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  primary key (id)
);

-- Create new example rows
insert into programming_languages (language, rating) values("Node.js", 9);

select * from programming_languages;

ALTER TABLE programming_languages
ADD mastered BOOLEAN DEFAULT FALSE;

ALTER TABLE programming_languages
ADD COLUMN mastered2 BOOLEAN DEFAULT TRUE;

update programming_languages set rating=95 where id = 1;

