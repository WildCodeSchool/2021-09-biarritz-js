/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 10
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat
*/

const scores = [
  '1:0',
  '2:0',
  '3:0',
  '4:4',
  '2:2',
  '3:3',
  '1:4',
  '2:3',
  '2:4',
  '3:3',
];

function getPoints(array) {
  let score = 0;

  for (let i = 0; i < array.length; i++) {
    const listeScores = array[i].split(':');
    console.log(listeScores);
    if (parseInt(listeScores[0]) == parseInt(listeScores[1])) {
      // égalité
      score += 1;
    } else if (parseInt(listeScores[0]) > parseInt(listeScores[1])) {
      // victoire
      score += 3;
    }
  }

  return score;
}

module.exports = getPoints;
