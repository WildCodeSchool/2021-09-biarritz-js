START TRANSACTION;
CREATE TABLE Drinks
(id INT NOT NULL AUTO_INCREMENT, 
label VARCHAR(200) NOT NULL, 
hasAlcohol BOOLEAN NOT NULL DEFAULT 0,
price FLOAT,
main_ingredient INT,
PRIMARY KEY(id)
);

CREATE TABLE Ingredients
(id INT NOT NULL AUTO_INCREMENT, 
label VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO Ingredients (label)
VALUES('Gin'),
('Vodka'),
('Tequila'),
('Rhum'),
('Eau gazeuse'),
('Limonade'),
('Biere'),
('Jus'),
('Pastis'),
('Malibu'),
('Manzana');

INSERT INTO Drinks (label, hasAlcohol,price,main_ingredient)
VALUES('Gin fizz', true, 8.5, 1),
('Sea Breeze', true, 8.5, 2),
('Moscow Mule', true, null, 2),
('Tequila Sunrise', true, 8, 3),
('Ti punch', true, 8.5, 4),
('Long island ice tea', true, 8, 2),
('Margarita', true, NULL, 3),
('Pina Colada', true, 9, 4),
('Mojito', true, 7, 4),
('Mai tai', true, 10, 4),
('Expresso martini', true, 9, 2),
('Bloody Mary', true, 9.5, 2),
('Chantaco', false, 6, 8),
('Chose', false, 5, 8),
('Sunset', false, 6, 8),
('Monaco', true, 3.7, 7),
('Picon biere', true, 4.5, 7),
('Diabolo grenadine', false, 3.7, 6),
('Diabolo citron', false, 3.5, 6),
('Irish coffee', true, 7, 5),
('Tout à l egout', true, 12, 3),
('Serpilliere', true, 3, 9),
('Paillasson', true, null, 10);