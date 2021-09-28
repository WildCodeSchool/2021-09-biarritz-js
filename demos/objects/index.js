const student = {
    nom:'Greg',
    campus:'Anglet',
    speciality:'js',
    sexe: 'n',
    age:'25',
    ville:'biarritz',
};

//console.log(student);

const creeChaine =  (partie1 = '', partie2 = '', partie3 = '') => {
    // Concatener 3 chaines pour en faire une plus grande
    const chaineConcatenee = `${partie1} ,  ${partie2} , ${partie3}`;
    
    return chaineConcatenee;
};

//console.log(student);
student.denomination = creeChaine();
//console.log(student);
student.infos = creeChaine(student.sexe, student.age, student.ville);
console.log(student);
