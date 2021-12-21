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
13 - Créez dans models/user.js une fonction create qui prend en paramètre firstname, lastname, email et password (crypté) et renvoie une promesse d'exécution de la requête "INSERT INTO" correspondante. (5min)
14 - Dans la route POST, après le cryptage du mot de passe, appelez la fonction User.create et gèrez le retour de la promesse (avec async/await ou then, au choix) pour renvoyer au choix, un status 201 avec l'id créé ou un status 500 avec l'erreur correspondante. (5min)
15 - Rajoutez une route controllers/auth.js qui se déclenchera sur /api/auth, l'exporter et l'importer depuis controllers/index.js (3min)
16 - Créez et testez la route /api/auth/coucou qui renvoie Hibou (3min)
17 - Créez une route POST /api/auth/login avec dans le body email et password. Les récupérer. (3min)
18 - Créez dans user.js la fonction getByEmail, qui prend en paramètre un email et renvoie dans une promesse tous les champs de l'utilisateur correspondant à cet email. L'exporter. (10min)
19 - Dans le POST /api/auth/login, appelez la fonction getByEmail et récupérez via la promesse l'objet contenant l'utilisateur. Si aucun utilisateur n'a été trouvé, renvoyez un message à l'utilisateur, lui indiquant que l'email est incorrect. (5min)
20 - Dans models/user.js, rajoutez et exportez la fonction verifyPassword, qui prend en entrée un mot de passe non crypté et un mot de passe crypté, et les compare : return argon2.verify(hashedPassword, plainPassword, hashOptions). Exportez cette fonction. (5min)
21 - Dans le POST /api/auth/login, si l'email a été trouvé, comparez le mot de passe stocké en base avec le mot de passe du req.body. S'ils sont différents (verifyPassword renverra false), retournez à l'utilisateur un message d'erreur informant que le mot de passe est incorrect. (5min)
22 - Si le mot de passe est correct (verifyPassword a renvoyé true), créez un jwt. Pour cela, installer jsonwebtoken et créer le fichier /helpers/users.js (vous pouvez copier/coller le fichier obtenu depuis les quêtes). (1min)
23 - Générer le token (grace à la fonction calculateToken) et le renvoyer par cookie. Vérifiez par Postman que le cookie est bien présent sur votre ordinateur après un login réussi ! Pour tester, créez un nouveau utilisateur avec un mot de passe différent et vérifiez que le token stocké dans le cookie change bien quand vous changez d'utilisateur via la route login. (10min)
24 - Stocker dans le token l'id utilisateur. Tester grace à jwt.io que le token contient bien cette valeur (3min)
25 - Créer une route PUT /api/users qui sera réservée uniquement aux clients loggés. (2min)
26 - Quand l'utilisateur demande une fonction restricted (PUT /api/users), aller lire le cookie et le renvoyer en res.status à postman. Pour cela, installer cookie-parser. L'importer dans app.js et l'utiliser comme un middleware. (5min)
27 - Créer un middleware dans helpers/users.js (req, res, next). Ce middleware va s'appeler readUserFromCookie, il va lire le cookie, décrypter le token (jwt.decode) et stocker l'id utilisateur dans req.userId. (15min)
28 - Dans la route PUT /api/users, appelez le middleware (avant req,res). Dans le contenu de la route PUT, renvoyez à l'utilisateur dans une res.status(200) son id, lu directement dans req.userId. (10min)
