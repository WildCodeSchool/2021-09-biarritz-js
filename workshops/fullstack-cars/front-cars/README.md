Créons une application fullstack de gestion de voitures

Le besoin client :

Le site va gérer plusieurs voitures.
Chaque voiture a une immatriculation, une marque, un modèle et une date de mise en circulation.
Chaque marque peut être associée à 0 plusieurs voitures.
Un modèle ne correspond qu’à une marque mais plusieurs voitures peuvent avoir le même modèle.

Les étapes :
1 - modéliser votre base de données
2 - créer la base de données et insérer des valeurs
3 - créer la route GET en back qui renvoie les voitures
4 - tester cette route grâce à Postman (créer une collection spéciale pour ce workshop)
5 - create-react-app pour le front. Le site affichera la liste de toutes les voitures en base.
6 - rajouter un input qui filtrera sur les immatriculations => rajout du filtre sur la route GET. On teste avec Postman !!
7 - rajouter un input “select” sur les marques => rajout du filtre sur la route GET + rajout d’une route GET sur les marques. On teste avec Postman !!
8 - rajouter un input “select” sur les modèles, qui sera mis à jour quand on change de marque => rajout du filtre sur la route GET + rajout d’une route GET sur les modèles avec la marque en entrée. On teste avec Postman !!

Bonus :

- Pouvoir rajouter des voitures
- Pouvoir supprimer des voitures
- Pouvoir supprimer des modèles (attention à la suppression en cascade !)
