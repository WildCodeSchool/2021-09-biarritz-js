1 - Modéliser la base de données (au choix, soit un MCD, soit un MLD, soit un MPD)
2 - Créer la base de données
create database express_recap;
use express_recap;
create table plants (id_plant int not null auto_increment, name varchar(255), primary key (id_plant));

3 - Créer la collection dans postman (c'est magique, c'est merveilleux)
4 - Créer l'application express :
Créer un fichier app.js
importer express => npm install express - require('express')
créer l'application express
se connecter à la base de données (grace au .env, ne pas oublier d'installer dotenv et mysql2)
dire à l'application d'écouter un port
route de test : coucou hibou

5 - Pour tester : installer nodemon et exécuter le script
6 - Faire une route GET => avec un select, puis des console.log pour extraire la donnée et quand on l'a récupérée, on utilise res.status.json pour la renvoyer en res (response)
7 - Faire une route POST => Ne pas oublier le middleware json pour pouvoir lire le req.body
Récupère les valeurs dans le req.body
Faire la requete post
Récupérer l'id de l'élément inséré (utiliser des console.log)
Res.json l'objet inséré en base { id, name }
8 - Faire une route GET /:id
Récupérer l'id dans req.params
Rajouter le filtre dans la requête
9 - Rajouter un filtre dans GET plants par rapport au name
10 - Valider l'entrée utilisateur pour le POST
installer joi
spécifier comment valider les input
gèrer l'erreur
11 - Faire une route DELETE /:id
Recupérer l'id dans req.params
Faire une requête DELETE
Si on a bien supprimé une ligne => success, sinon 404 not found
12 - Route PUT /:id
Recupérer l'id dans req.params
Faire une requête DELETE
Ne pas oublier de valider les données

13 - Rajouter une route (qui sert à rien) permettant d'ajouter une plante cryptée
POST /api/stnalp
install argon2
récupérer le name dans le req.body
le crypter
enregistrer dans la base
14 - Faire une route (qui sert à rien non plus) permettant de tester la connexion avec la combo (id / plantName)
POST /api/login
récupérer id et name dans le req.body
Vérifier que le name correspond au hash dans la base
Si oui => renvoie OK, sinon, Invalid Credentials

15 - Renvoyer un cookie contenant le token de connection de la plante
Installer jsonwebtoken et l'importer
Créer la clef de sécurité dans .env
Créer le token et renvoyer le cookie
