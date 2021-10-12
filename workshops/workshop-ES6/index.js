// ancienne fonction
/*
function hello(firstName){
    return "Hello " + firstName + " welcome into the Wild."
}
*/

const hello = (firstName) => {
    return `Hello ${firstName} welcome into the Wild.`
};

const messageBonjour = hello("Lydie");
console.log(messageBonjour);




const fruits = ["Bananes", "Oranges", "Fraises"];
const legumes = ["Choux", "Carottes"];

const fruitsEtLegumes = [...legumes, ...fruits];
console.log(...fruitsEtLegumes);