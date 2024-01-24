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

// Add skills dynamically ✅
// Calculate years of experience automatically check ✅
const currentYear = new Date().getFullYear() // get current year


// Create dynamically HTML structure based on skillsArray data
const createSkillsList = (listItem) => `<li class="skills__column" data-name="${listItem.name}" data-type="${listItem.type}">
<h2 class="skills__title">${listItem.name}</h2>
<span class="skills__years">${currentYear - listItem.experience} Years</span>
</li>`;

const skillsList = skillsArray.map((skill) => createSkillsList(skill)).join(""); // Convert to string

// console.log(skillsList);

const ul = `<ul class="skills__list">${skillsList}</ul>`; // Create an unordered list and add all skills inside it

const skillsSection = document.querySelector("#skills");

skillsSection.insertAdjacentHTML("beforeend", ul); // Add the ul in the section


/* ✨ Bonus ✨ */
// Add filters to skills section ✅

document.querySelectorAll(".skills__button").forEach((element) => { 
  element.addEventListener("click", () => {    // add click event on each button
    document.querySelector(".skills__button--isActive").classList.remove("skills__button--isActive"); // remove the class from each button
    element.classList.add("skills__button--isActive"); // add class on the button which is clicked
    document.querySelector(".skills__list").classList = `skills__list ${element.dataset.type}`; // add a new class to the ul depending on the clicked button
  })
});