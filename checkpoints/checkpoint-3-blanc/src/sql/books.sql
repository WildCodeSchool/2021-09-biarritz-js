CREATE DATABASE booksworkshop;
USE booksworkshop;
CREATE TABLE `books` (
  `idbooks` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `genre` VARCHAR(255) NULL,
  `picture` VARCHAR(255) NULL,
  `artist` VARCHAR(255) NULL,
  `summary` LONGTEXT NULL,
  `year` INT NULL,
  PRIMARY KEY (`idbooks`));

INSERT INTO books
  (title, genre, picture, artist, summary, year)
  VALUES
  ('The Da Vinci Code', 'conspiracy', 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg', 'Dan Brown', 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown s second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.', 2003),
  ('Digital Fortress', 'conspiracy', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/DigitalFortress.jpg/220px-DigitalFortress.jpg', 'Dan Brown', 'Digital Fortress is a techno-thriller novel written by American author Dan Brown and published in 1998 by St. Martin s Press. The book explores the theme of government surveillance of electronically stored information on the private lives of citizens, and the possible civil liberties and ethical implications of using such technology.', 1998),
  ('Origin', 'conspiracy', 'https://upload.wikimedia.org/wikipedia/en/6/67/Origin_%28Dan_Brown_novel_cover%29.jpg', 'Dan Brown', 'Origin is a 2017 mystery thriller novel by American author Dan Brown[1] and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017, by Doubleday.[2][3] The book is predominantly set in Spain and features minor sections in Sharjah and Budapest.', 2017);