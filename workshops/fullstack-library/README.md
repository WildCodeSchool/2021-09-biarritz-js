Allez, on avance, on a pas peur, on va faire du full-stack.
Du full quoi ? Du back et du front. On va être à la fois serveur et client.
Pour faire ceci, je vais vous guider et on va séparer le projet en 3 parties :
- La base de données
- L'API (le back)
- Le site (le front)

On vous demande de faire une application de gestion d'une bibliothèque.

*************************
BASE DE DONNEES
*************************
La base de données sera en mySQL. Vous allez devoir l'élaborer seul.e à partir du besoin client :
La bibliothèque contient des livres. 
Chaque livre est identifié par sa quote (Une série de 5 lettres et chiffres), sa date de parution, son nombre de pages, sa maison d'édition et son format (poche ou non). Chaque livre a également un auteur (et un seul).
Chaque auteur a un nom, un prénom, une date de naissance, une nationalité. Un auteur peut écrire plusieurs livres.
Chaque maison d'édition a un nom. Une maison d'édition peut éditer plusieurs livres.

A partir du besoin (regarde bien les mots clef), élabore le MCD (ou MLD selon tes préférences) puis crée les tables. Privilégie les noms de tables et de champs en anglais. N'oublie pas les clefs étrangères.

**************************
BACK
**************************
Commence par créer les dossiers routes et models. 
Pour chaque table, crée le fichier correspondant dans routes (avec un s) et dans models (sans s).
Crée également le fichier index.js qui va importer les autres fichiers et qui va contenir la fonction setupRoutes (réfère toi à la quête 9 pour ça).
Dans le fichier app.js déjà présent, crée la structure d'une application express et connecte toi à la base de données. N'oublie pas de dire à ton application d'écouter sur le port désiré et vérifie qu'à l'exécution, le message apparaisse bien.

Tu vas utiliser 4 routes pour chaque table :
GET => récupère l'information principale pour chaque table (nom, titre ou nom et prénom)
GET :id => récupère toutes les informations pour un id donné
POST => insère en base un enregistrement
DELETE :id => supprime l'enregistrement ayant l'id donné

Insère plein de données en base pour voir si tes routes marchent (cela te servira également à vérifier que ton front affiche bien les bonnes données).

***************************
FRONT
***************************
Le dossier create-react-app est déjà créé.
Ajoute un composant menu
Le menu contiendra une navbar, fixe, sur la partie gauche de l'écran. Dedans, en haut, 4 liens seront disponibles :
- Home (peut être remplacé par un logo)
- Auteurs
- Livres
- Maisons d'édition
En bas des liens, tu mettras le logo github avec un lien vers ton github.

Crée désormais tes routes pour chacun des liens, renvoyant chacun vers 3 composants : Author, Book et Edition. 
Vérifie que les liens fonctionnent bien (écris un texte bateau dans chacun des composants pour vérifier).

Dans le composant Author, tu vas afficher une liste des auteurs (fais un appel api vers ta route GET authors).
En cliquant sur ces auteurs, tu afficheras le détail de l'auteur (composant AuthorDetails) : nom, prénom, date de naissance, nationalité.
Dans le composant Book, tu afficheras la liste des livres (appel api vers GET books). En cliquant sur un livre, tu afficheras le détail du livre (composant BookDetails) : quote, nombre de pages, année d'édition et son format. Tu afficheras également sa maison d'édition.
Dans le composant Edition, tu afficheras la liste des maisons d'édition.
Maintenant, rajoute un input texte dans Book, afin de pouvoir filter les livres par rapport à leur titre. Tu devras pour ceci rajouter un filtre "contains" à ta route GET des books et l'appeler. Un bouton permettra de vider cet input.

*****************************
BONUS
*****************************
Dans le composant Author, tu afficheras pour chaque auteur le nombre de livres qu'il a écrits.
Dans le composant Edition, tu afficheras le nombre de livres édités.
Dans le composant AuthorDetails, la nationalité de l'auteur sera affichée grace à un petit drapeau.
Dans chacun des composants, ajoute un bouton pour pouvoir supprimer les enregistrements. Attention, on ne doit pas pouvoir supprimer des auteurs ou des maisons d'édition associés à des livres !
Dans chacun des composants, permet l'ajout d'enregistrements.