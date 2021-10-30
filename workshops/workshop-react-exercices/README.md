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
2- Dans le dossier components, crée le composant Joke, donne lui la bonne extension et n'oublie pas le fichier css associé
3- Dans le component Joke, crée la structure du composant et exporte le. Importe le ensuite depuis App.
4- Le component Joke n'est rien de plus qu'une div contenant un texte. Crée cette div, donne lui comme texte "Blague" et appelle ce composant dans App pour vérifier que "Blague" s'affiche bien .
5- Rajoute une classe à cette div.. Regarde le screenshot 5.jpg situé dans le dossier screens pour savoir quels styles appliquer à ta classe.


6- Tel quel, ce composant n'a aucun intérêt. Nous allons lui passer un texte via les props, afin de le rendre modulable. Rajoute donc une props "blague" et affiche la dans ton composant. N'oublie pas de passer la props lors de l'appel vers Joke dans App. Pour le moment, mets une blague de ton choix. Si tu ne l'as pas fait, essaie de déconstruire les props pour ne récupérer que blague.
7- Nous allons rajouter une deuxième div dans le component. Il affichera la props "chute", qui sera également passée en props dans App.
8- Dans App, importe le fichier data.js, il va contenir un tableau contenant plusieurs blagues et leurs chutes. Regarde bien ce tableau d'objets et essaie de voir quelle propriété correspond à quelle props. N'hésite pas à utiliser console.log pour vérifier que ton import a bien fonctionné.
9- Dans App, utilise la méthode .map pour afficher les blagues contenues dans le fichier data.js. Tu dois alors faire matcher les propriétés de ton objet aux props de ton composant. 
Bonus : Quand on utilise un .map pour générer automatiquement des objets, on doit définir la props key, qui viendra du paramètre index de la méthode map. Cet article pourra peut-être t'aider : https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905
10- Regarde le screenshot 10.jpg fourni dans le dossier screens pour styliser ton composant Joke. C'est également le moment de vérifier dans ta console qu'aucune erreur ou aucun warning ne traine.


Nous allons utiliser l'API Random Jokes. Voici le lien vers sa documentation, commence par y faire un tour : 
https://sv443.net/jokeapi/v2/
