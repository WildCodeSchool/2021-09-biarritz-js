/*const nombreADeviner = 23;
const monNombre = 25;

if (nombreADeviner > monNombre){
    console.log('PLus');
}
else if(nombreADeviner < monNombre){
    console.log('moins');
}
else if (monNombre === nombreADeviner){
    console.log('win');
}
*/

const monTelephone = '02';//prompt("Entrez votre numéro de téléphone sur 10 caractères");

if (monTelephone.length != 10){
    console.log('numéro de téléphone pas bon');
}

console.log('Merci, on vous rappelle');


/// TERNARY

// react example
return answerGiven
      ? correctAnswer
        ? { backgroundColor: 'green' }
        : { backgroundColor: 'red' }
      : { backgroundColor: 'blueviolet' };


      // equivalent
    if(answerGiven){
        if(correctAnswer){
            backgroundColor: 'green'
        }
        else{
            backgroundColor: 'red'
        }
    }
    else{
        backgroundColor: 'blueviolet' 
    }