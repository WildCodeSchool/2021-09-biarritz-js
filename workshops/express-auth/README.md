\*\* EXPRESS - AUTHENTIFICATION
On va voir 3 choses en détail :

- MVC
- Hashing Password
- Token (JWT)

1 - Créez répertoire
2 - Créez application express (15min)
créer app.js
install express
utiliser express
créer database express_auth
install dotenv
db-config.js
install mysql2
listen de l'app sur le port
COUCOU HIBOU

3 - Créez une table users, qui va contenir : firstname (100), lastname (150), email (255), password (255) (2min)
4 - Créez un répertoire controllers et un répertoire models. Rajouter controllers/index.js, controllers/users.js et models/user.js. (2min)
5 - Dans controllers/users.js, définissez const usersRouter = require("express").Router(); et exportez le. (3min)
6 - Importez le dans controllers/index.js et créez une fonction setupRoutes qui prend en entrée app et redirige vers usersRouter quand on appelle "/api/users". Exportez setupRoutes. app.use('chemin pour ma route précise', maRoute). L'importer et l'appeler dans app.js (5min)
7 - Nous allons rajouter le cryptage d'une chaine de caractères. Installer argon2 et dans models/user.js, rajouter l'import argon2. (2min)
8 - Créez une fonction cryptePassword qui prend en paramètre un password et renvoie la chaine cryptée : argon2.hash(password,hashOptions). Allez voir ici pour jouer avec les différents paramètres : https://antelle.net/argon2-browser/, sinon prenez les options par défaut de la quête (4min+2min pour le console.log)
8bis - Créez une route POST "/api/users/test" qui aura dans le body un password et qui renvoie le même mot de passe, mais crypté (15min).
Récupérez le password du req.body. WARNING : json.
Importez l'objet User depuis models/user.js
Appelez la fonction User.cryptePassword et récupérez dans sa promesse le password crypté.
Renvoyez le dans une res status 200
9 - Dans controllers/users.js, ajoutez une route POST "/" et allez récupèrer firstname, lastname, email et password depuis le req.body. WARNING : json. (1min)
10 - Rajoutez la validation Joi pour ces champs, en respectant les restrictions de la base de données (taille de champs). Le champ email doit etre un email valide et le mot de passe doit avoir entre 7 et 11 caractères. (5min)
11 - Si une erreur est renvoyée par Joi, passez le(s) message(s) à l'utilisateur (5min)
12 - Si pas d'erreur, cryptez le mot de passe en utilisant User.cryptePassword. (1min car déjà fait au 8bis)
13 - Créez dans models/user.js une fonction create qui prend en paramètre firstname, lastname, email et password (crypté) et renvoie une promesse d'exécution de la requête "INSERT INTO" correspondante.
14 - Dans la route POST, après le cryptage du mot de passe, appelez la fonction User.create et gèrez le retour de la promesse (avec async/await ou then, au choix) pour renvoyer au choix, un status 201 avec l'id créé ou un status 500 avec l'erreur correspondante.
15 - Testez dans postman en appelant la route POST /api/users
