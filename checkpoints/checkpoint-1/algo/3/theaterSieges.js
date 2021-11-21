/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100
*/

function theaterSieges() {
  // Your code here !
  const colonnes = 26;
  const sieges = 100;
  let listeSieges = new Array(colonnes);
  for (let i = 0; i <= colonnes - 1; i++) {
    listeSieges[i] = new Array(sieges);
    for (let j = 0; j <= sieges - 1; j++) {
      listeSieges[i][j] = `${i + 1}-${j + 1}`;
    }
  }
  return listeSieges;
}

console.log(theaterSieges());

module.exports = theaterSieges;
