const skillsArray = [
  {
    name: 'HTML',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'CSS',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'Javascript',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'React',
    experience: '2016',
    type: 'frontend',
  },
  {
    name: 'Redux',
    experience: '2017',
    type: 'frontend',
  },
  {
    name: 'React Testing Library',
    experience: '2020',
    type: 'frontend',
  },
  {
    name: 'Node.js',
    experience: '2020',
    type: 'bakend',
  },
  {
    name: 'Express.js',
    experience: '2020',
    type: 'backend',
  },
  {
    name: 'Mongodb',
    experience: '2020',
    type: 'backend',
  },
];

// Add skills dynamically
// Calculate years of experience automatically
const currentYear = new Date().getFullYear() // get current year

const createSkillsList = (listItem) => `<li class="skills__column" data-name="${listItem.name}" data-type="${listItem.type}">
<h2 class="skills__title">${listItem.name}</h2>
<span class="skills__years">${currentYear - listItem.experience} Years</span>
</li>`;

const skillsList = skillsArray.map((skill) => createSkillsList(skill)).join("");

// console.log(skillsList);

const ul = `<ul class="skills__list">${skillsList}</ul>`

const skillsSection = document.querySelector("#skills");

skillsSection.insertAdjacentHTML("beforeend", ul);