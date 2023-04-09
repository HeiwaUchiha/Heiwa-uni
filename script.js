import { LGAS } from './lgas.js';
import { COURSE } from './lgas.js';

const navLinks = document.getElementById("navLinks");
const firstIcon = document.querySelector(".icons1");
const scndIcon = document.querySelector(".icons2");

scndIcon.addEventListener("click", () =>{
    navLinks.style.right = '0'
})

firstIcon.addEventListener("click", () =>{
  navLinks.style.right = '-200px'
})

const partTime = document.querySelectorAll(".pd");

partTime.forEach((btn) => {
  btn.addEventListener("click", (e) =>{
    const partCourse = e.currentTarget.nextElementSibling;

    partCourse.classList.toggle("show-list")
  })
})

const stateSelect = document.getElementById("state-of-origin");
const states = ["Abia", "Adamawa", "AkwaIbom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "CrossRiver", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

for (let state of states) {
  const option = document.createElement("option");
  option.text = state;
  option.value = state;
  stateSelect.appendChild(option);
}


const lgaSelect = document.getElementById('local-govt');

stateSelect.addEventListener('change', () => {

  
  const selectedState = stateSelect.value;
  const lgas = LGAS[selectedState];
  lgaSelect.innerHTML = '';
  for (let i = 0; i < lgas.length; i++) {
    const option = document.createElement('option');
    option.value = lgas[i];
    option.text = lgas[i];
    lgaSelect.appendChild(option);
  }
});

const progSelect = document.getElementById("program");
const programs = ["Diploma", "Undergraduate", "Postgraduate"];
const courseSelect = document.getElementById("course")


for (let program of programs) {
  const option = document.createElement("option");
  option.text = program;
  option.value = program;
  progSelect.appendChild(option);
}


progSelect.addEventListener('change', () => {
  const selectedProg = progSelect.value;
  const courses = COURSE[selectedProg];
  courseSelect.innerHTML = '';
  for (let i = 0; i < courses.length; i++) {
    const option = document.createElement('option');
    option.value = courses[i];
    option.text = courses[i];
    courseSelect.appendChild(option);
  }
});


// stateSelect.addEventListener('change', () => {

  
//   const selectedState = stateSelect.value;
//   const lgas = LGAS[selectedState];
//   lgaSelect.innerHTML = '';
//   for (let i = 0; i < lgas.length; i++) {
//     const option = document.createElement('option');
//     option.value = lgas[i];
//     option.text = lgas[i];
//     lgaSelect.appendChild(option);
//   }
// });