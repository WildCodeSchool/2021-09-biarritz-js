const avatarImage = document.querySelector('.avatar');
const links = document.querySelectorAll('a');
const presentationElement = document.querySelector('.description');
const pinkTexts = document.querySelectorAll('.pink-text');
const pinkBackgrounds = document.querySelectorAll('.pink-bg');
const modifyBtn = document.querySelector('.modify-btn');
const nameElement = document.querySelector('#name');
const modifyFrontSkillsBtn = document.querySelector('#modify-front-skills-btn');
const frontDevTools = document.querySelector('#front-dev-tools');
const backDevToolsFrom = document.querySelector('#dev-tools-back-form');
const backDevToolsList = document.querySelector('#dev-tools-back-list');
const backDevToolsInput = document.querySelector('#dev-tools-back-input');

avatarImage.addEventListener('click', () => {
  avatarImage.src = 'image/avatar-bis.svg';
});

modifyBtn.addEventListener('click', () => {
  const newName = prompt("What's your name ?");
  const newColor = prompt('Which color ?');
  nameElement.innerText = newName;
  nameElement.style.color = 'white';
  presentationElement.style.backgroundColor = newColor;
  pinkTexts.forEach((el) => (el.style.color = newColor));
  pinkBackgrounds.forEach((el) => (el.style.backgroundColor = newColor));
  links.forEach((el) => el.classList.add('purple-text'));
});

modifyFrontSkillsBtn.addEventListener('click', () => {
  frontDevTools.querySelectorAll('*').forEach((el) => el.remove());
  ['VSCode', 'Github', 'Terminal'].forEach((skill) => {
    const skillElement = document.createElement('li');
    skillElement.innerText = skill;
    frontDevTools.appendChild(skillElement);
  });
});

backDevToolsFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const skillElement = document.createElement('li');
  skillElement.innerText = backDevToolsInput.value;
  backDevToolsList.appendChild(skillElement);
  backDevToolsInput.value = '';
});
