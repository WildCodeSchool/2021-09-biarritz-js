*git clone* / *npm install*

Are you a game of thrones addict ?

Cette suite d'exercices va te permettre de t'entrainer sur React et de revoir :
- La création d'un composant
- Le passage de props
- La destructuration de props
- La création et l'utilisation de variables d'états (states)
- L'utilisation de useEffect
- L'appel vers une API et l'exploitation des résultats


Toutes les étapes vont être détaillées ci dessous. Suis les à la lettre et prend bien le temps de lire chaque consigne.

1- Crée le composant Quote.jsx, qui prendra en props une citation et l'affichera dans un <li>.<br/>
2- Crée le composant QuoteList.jsx, qui prendra en props un nom de personnage "name" et un tableau de citations "quoteList". Ce composant affichera en gras et centré le nom du personnage et aura une balise <ul> dans laquelle il appellera le composant Quote autant de fois que de citations disponibles dans le tableau "quoteList".<br/>
3- Pour tester, importe dans App le fichier data.js et appelle ton composant Quote en précisant que le nom du personnage est "Tywin Lannister".<br/>
4- Tu vas rajouter dans App un input de type select, qui contiendra la liste des personnages. Pour le moment, donne à ta liste déroulante les valeurs disponibles suivantes : "samwell","tywin","jon". <br/>
5- Chaque changement de valeur de cette liste déroulante va déclencher un appel API et modifier le nom du personnage ainsi que ses citations. La documentation que nous allons utiliser est disponible : https://gameofthronesquotes.xyz/. La partie nous intéressant est dans la partie "Get character's details with his quotes". Vérifie que ton application fonctionne pour les 3 personnages ajoutés "en dur" et passe à la suite. <br/>
6- Au démarrage de l'application, il va falloir remplir ta liste déroulante de personnages de façon dynamique, en appelant l'API et en utilisant la partie "List of characters with their quotes". Pour que l'affichage soit plus joli, tu afficheras la valeur contenue dans "name" et tu utiliseras la valeur contenue dans "slug" (pour ensuite aller récupérer ses citations).

****************************************************************************************
A ce stade, tu dois donc avoir un menu déroulant contenant tous les personnages de GoT.
A chaque changement de cette liste déroulante, la.es citation.s du personnage sont affichée.s
et son nom apparait en gras et centré.
****************************************************************************************
