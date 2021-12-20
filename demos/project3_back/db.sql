CREATE DATABASE Project3;
USE Project3;

CREATE TABLE IF NOT EXISTS `Project3`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `Project3`.`addresses` (
  `id_address` INT NOT NULL AUTO_INCREMENT,
  `postal_code` VARCHAR(10) NOT NULL,
  `city` VARCHAR(200) NOT NULL,
  `address1` VARCHAR(255) NOT NULL,
  `address2` VARCHAR(255) NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id_address`),
  INDEX `fk_addresses_users_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_addresses_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `Project3`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO users (firstname, lastname, email) 
VALUES('Lydie', 'Pluvinage','lydie.pluvinage@wildcodeschool.com'),
('Joseph', 'Mayoral', 'joseph.mayoral@wildcodeschool.com'),
('Camille', 'Sabatier', 'camille.sabatier@wildcodeschool.com'),
('Kaïko', 'Pluvinage', 'nonos@woof.fr');

INSERT INTO addresses (postal_code, city, address1, address2, id_user)
VALUES('64100', 'Bayonne', 'Sur la place', null, 1),
('64100', 'Bayonne', 'Au bout de la rue', 'Au fond à droite', 1),
('64200', 'Biarritz', '8 min de l''école', 'Mais bon ça reste à Biarritz', 2),
('33000', 'Bordeaux', 'A côté des girondins', null, 3),
('64990', 'Villefranque', 'Au bout du chemin', null, 4);
