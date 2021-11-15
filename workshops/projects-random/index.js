let projectsName = ['Wild Heroes', 'Dobby and Friends', 'Blind Crash Test', 'World Wild Quizz'];
const numberOfProjects = projectsName.length;
let orderMessage = `L'ordre de passage sera : \n`;

do{
    const randomNumber  = Math.floor(Math.random()*projectsName.length);
    orderMessage += `${projectsName[randomNumber]} \n`;
    projectsName = projectsName.filter((projet) => projet != projectsName[randomNumber]);
} while (projectsName.length > 0);

console.log(orderMessage);