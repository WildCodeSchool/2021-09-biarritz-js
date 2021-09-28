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
//console.log(console);


const fruits = [
{name:'pomme', couleur:'vert', sayHello: function(){
    console.log(`hello je suis une  ${this.name}`);
}},
{name:'orange', couleur:'orange', sayHello: function(){
    console.log(`hello je suis une  ${this.name}`);
}},
{name:'banane', couleur:'jaune', sayHello: function(){
    console.log(`hello je suis une ${this.name}`);
}},
];

let noms = '';
let couleurs = '';

for (let i = 0; i< fruits.length ; i++){
    //noms += fruits[i].name + ' ';
    //couleurs += ` ${fruits[i].couleur}`;
    fruits[i].sayHello();
    //console.log(`nom : ${fruits[i].name} - couleur:${fruits[i].couleur}`);
}
//console.log(noms);
//console.log(couleurs);