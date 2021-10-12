let projectsName = ['Auri-Artwoork', 'Biarritz tourisme', 'La belle miche', 'Shoe Sheperd', 'Wild resto'];
const numberOfProjects = projectsName.length;
let orderMessage = `L'ordre de passage sera : \n`;

do{
    const randomNumber  = Math.floor(Math.random()*projectsName.length);
    orderMessage += `${projectsName[randomNumber]} \n`;
    projectsName = projectsName.filter((projet) => projet != projectsName[randomNumber]);
} while (projectsName.length > 0);

console.log(orderMessage);