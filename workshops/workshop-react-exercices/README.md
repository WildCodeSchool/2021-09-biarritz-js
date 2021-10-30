*git clone* / *npm install*

Cette suite d'exercices va te permettre de t'entrainer sur React et de revoir :
- La création d'un composant
- Le passage de props
- La destructuration de props
- La création et l'utilisation de variables d'états (states)
- L'utilisation de useEffect
- L'appel vers une API et l'exploitation des résultats


Toutes les étapes vont être détaillées ci dessous. Suis les à la lettre et prend bien le temps de lire chaque consigne.

Tu trouveras pour t'aider un dossier screens, qui contiendra des screenshots du résultat à différentes étapes. Elles te permettront de savoir si ton programme se rapproche suffisamment des consignes demandées.

1- Crée le dossier components au bon endroit (ceci doit devenir un réflexe dans tout projet React)
2- Dans le dossier components, crée le composant Joke.jsx et n'oublie pas le fichier css associé
3- Dans le component Joke, crée la structure du composant et exporte le. Importe le ensuite depuis App.
4- Le component Joke n'est rien de plus qu'une div contenant un texte. Crée cette div, donne lui comme texte "Blague" et appelle ce composant dans App pour vérifier que "Blague" s'affiche bien .
5- Rajoute une classe à cette div. N'oublie pas d'importer le fichier css. Regarde le screenshot 5.jpg situé dans le dossier screens pour savoir quels styles appliquer à ta classe.

****************************************************************************************
C'est le moment de vérifier dans ta console qu'aucune erreur ou aucun warning ne traine.
****************************************************************************************

6- Tel quel, ce composant n'a aucun intérêt. Nous allons lui passer un texte via les props, afin de le rendre modulable. Rajoute donc une props "blague" et affiche la dans ton composant. N'oublie pas de passer la props lors de l'appel vers Joke dans App. Pour le moment, mets une blague de ton choix. Si tu ne l'as pas fait, essaie de déconstruire les props pour ne récupérer que blague.
7- Nous allons rajouter une deuxième div dans le component. Il affichera la props "chute", qui sera également passée en props dans App.
8- Dans App, importe le fichier data.js, il va contenir un tableau contenant plusieurs blagues et leurs chutes. Regarde bien ce tableau d'objets et essaie de voir quelle propriété correspond à quelle props. N'hésite pas à utiliser console.log pour vérifier que ton import a bien fonctionné.
9- Dans App, utilise la méthode .map pour afficher les blagues contenues dans le fichier data.js. Tu dois alors faire matcher les propriétés de ton objet aux props de ton composant. 
Remarque : Quand on utilise un .map pour générer automatiquement des objets, on doit définir la props key, qui viendra du paramètre index de la méthode map. Cet article pourra peut-être t'aider : https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905
10- Regarde le screenshot 10.jpg fourni dans le dossier screens pour styliser ton composant Joke. 

****************************************************************************************
C'est le moment de vérifier dans ta console qu'aucune erreur ou aucun warning ne traine.
****************************************************************************************

11- Nous allons désormais rajouter des input pour que l'utilisateur puisse choisir les blagues à afficher. Nous allons utiliser l'API Random Jokes. Voici le lien vers sa documentation, commence par y faire un tour afin de voir les différents filtres disponibles : 
https://sv443.net/jokeapi/v2/
12- Notre premier input va être le nombre de blagues à afficher. Pour ceci, tu vas rajouter un input dans App, qui sera de type "number". Ce composant va modifier, à chaque fois que la valeur va être changée par l'utilisateur (en utilisant la formidable boite à jouets qu'est (event)), une variable d'état nommée numberJokes. Par défaut, numberJokes sera initialié à 1. Le label lié à cet input sera : "Nombre de blagues"
13- Le deuxième input va être un input de type "checkbox". Il va mettre à jour une variable d'état de type booléen, qui s'appelle "withDelivery" et qui sera initialisé à true. Le label associé à cet input sera "Avec chute".
14- Le troisième input sera de type "text" et mettra à jour, à chaque changement, la valeur de la variable d'état "containsWord". Le label associé sera "contient" et cette variable d'état sera initialisée à une chaine de caractères vide.
Remarque : Pour vérifier que tes input sont bien connectés à tes variables d'état, utilise des console.log au début de ton composant.
15- Par souci esthétique, tous les input que nous avons crées vont être englobés dans un bandeau situé en haut de la fenêtre (tu vas donc devoir créer une div pour les stocker tous). Regarde le screen 15.jpg pour modifier si besoin ton composant et rajouter des styles à app.css

****************************************************************************************
C'est le moment de vérifier dans ta console qu'aucune erreur ou aucun warning ne traine.
****************************************************************************************

16- Tu vas créer un composant Filtres.jsx et son fichier css. Déplace tout ce qui concerne les filtres dedans (le div, les différents labels et input et leurs variables d'état). N'oublie pas d'exporter ton composant Filtres et de l'importer puis de l'appeler dans App. Vérifie que le résultat est le même qu'à l'étape 15 et qu'aucune erreur/warning n'apparait dans la console.
17- On va déplacer la variable d'état "withDelivery" dans notre composant principal, App. Tu vas créer dans App une fonction, nommée toggleWithDelivery, qui va changer la valeur de la variable d'état "withDelivery" (si false => true, si true => false). Tu vas passer en props cette fonction au composant Filter et la récupérer grace à la déconstruction dans Filter.jsx. Au onChange de l'input checkbox, tu vas appeler cette fonction. Vérifie grace à un console.log dans App que la valeur de la variable d'état change bien.
Remarque : Si tu as des problèmes à faire cette étape, va voir la quête "React Intermediate 01 - Lifting State Up" ou la correction du bonus 2 de "Exercice React - Props and State". Tu trouveras également un exemple dans le live coding Giphy (des idées de génie).
18- De la même manière, tu vas déplacer la variable d'état "numberJokes" et créer une fonction handleNumberJokes qui va prendre en paramètre un nombre et qui va le mettre dans la variable d'état. Il faudra passer en props cette fonction (n'oublie pas le paramètre) et dans Joke, récupérer cette fonction en utilisant la déconstruction. Lorsque l'utilisateur va changer le nombre de blagues désirées, on appelera alors la fonction récupérée (tu devras conserver l'appel à la boite à jouets event). Vérifie grace à un console.log que la valeur change bien.
19- Applique la même technique pour déplacer la variable d'état "containsWord" dans App.
20- Retourne dans la documentation de l'API joke, note quels sont les filtres que nous allons utiliser et prépare une fonction getApiCall (dans App) qui va aller lire les 3 variables d'état et va retourner une chaine de caractères contenant l'appel API que l'on va devoir faire.
Remarque : Tu vas devoir utiliser des conditions pour gèrer le cas où containsWord est vide et envoyer la bonne information en fonction de la valeur de withDelivery. N'hésite pas à utiliser un console.log pour vérifier que la fonction getApiCall retourne bien une valeur exploitable.

****************************************************************************************
C'est le moment de vérifier dans ta console qu'aucune erreur ou aucun warning ne traine.
****************************************************************************************
