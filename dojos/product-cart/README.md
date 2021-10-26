# Dojo React - Product cart

Ce dojo est l'occasion parfaite de pratiquer l'affichage de listes, la gestion du state, des formulaires et des évènements !

Pour commencer, clonez ce dépot et placez-vous à l'interieur du dossier coresspondant.

## Lancer l'application

```sh
$ npm install && npm start
```

## Objectif

Le but général est de créer une petite application React permettant de gérer un panier de produits.

![Screenshot de l'application finale](https://i.imgur.com/TRUaDKk.png)

Par souci de simplicité, tout se fera dans le composant `App`.

Jettez un oeil à `App.css` afin d'utiliser **uniquement** les classes existantes pour styliser l'application *a minima*. 

Conseil : *Comme d'habitude*, gardez bien votre console ouverte pendant le développement, pour ne pas laisser passer de warning ou d'erreur quelconque :)

## Instructions pour le dojo

### Afficher les produits (Read | GET | SELECT)

Dans `App.js` vous avez quelques exemples de produits dans la constante `initialProductList`.

Il faut afficher ces 3 produits dans un tableau qui possèdera les colonnes  : 
- 'Produit' (`name`)
- 'Prix unitaire' (`price`)
- 'Quantité' (`quantity`)
- 'Prix total' (`price * quantity`)

Attention : Comme nous allons modifier cette liste de produits par la suite et que nous voulons que React répercute les changements sur l'affichage, **les données sur les produits doivent être affichées à partir du `state` du composant `App`** (et pas directment depuis `initialProductList`, qui doit servir de valeur initiale à l'état du composant).

En dessous du tableau, affichez le montant total du panier, qui se calcule en faisant la somme des prix totaux (prix * quantité) des items du panier. Vous pouvez utiliser [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
### Ajout d'un produit dans la liste (Create | POST | INSERT INTO)

Creez un formulaire pour ajouter un produit : 
- Ce dernier contiendra deux champs : 'Nom' et 'Prix', ainsi qu'un bouton 'Ajouter'.
- Dès que l'on souhaite ajouter un produit, il faut s'assurer que le nom est bien présent et que la quantité a une valeur cohérente  (pensez aux contraintes d'input HTML5 !).
- Un nouveau produit dans la liste aura une quantité de 1.
- Un nouveau produit devra posséder un identifiant (`id`) généré aléatoirement au moment de la création. Vous pouvez utiliser [ceci](https://www.npmjs.com/package/uuid).

### Permettre de changer la quantité d'un produit dans la liste (Update | PATCH or PUT | UPDATE)

Dans le tableau, la colonne 'Quantité' ne devrait contenir que des `<input>` (pensez au bon type d'input, avec des contraintes cohérentes, comme on parle d'une quantité).

### Suppression d'un produit de la liste (Delete | DELETE | DELETE)

Dès que l'on renseigne une quantité de 0, une pop-up `window.confirm` apparait pour demander à l'utilisateur "Etes-vous sûr de bien vouloir retirer ce produit de la liste ?" : 
- S'il confirme, on le fait (sans blague !).
- Sinon sa saisie de quantité (0) est annulée (rien ne se passe, la quantité n'est pas mise à jour).

