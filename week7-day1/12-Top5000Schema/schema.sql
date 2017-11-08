DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;

TRUNCATE TABLE top5000;


LOAD DATA LOCAL INFILE 'C:/Users/moons/CodingBootCamp/CampActivities/week7-day1/12-Top5000Schema/TopSongs.csv' 
-- LOAD DATA LOCAL INFILE 'C:\\Users\\moons\\CodingBootCamp\\CampActivities\\week7-day1\\12-Top5000Schema\\TopSongs.csv' --
INTO TABLE top5000 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
-- IGNORE 1 ROWS --

select artist, count(song) as appearedCount from top5000 group by artist having appearedCount > 1;


CREATE TABLE topAlbums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM topAlbums;

TRUNCATE TABLE topAlbums;

