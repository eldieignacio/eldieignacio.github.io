const toggleAbout = document.getElementById("toggleAbout");
const closeAbout = document.getElementById("closeAbout");
const toggleAboutButton = document.querySelector(".about");

const toggleSkills = document.getElementById("toggleSkills");
const toggleSkillButton = document.querySelector(".skills");
const closeSkills = document.getElementById("closeSkills");

const toggleProjects = document.getElementById("toggleProjects");
const toggleProjectButton = document.querySelector(".projects");
const closeProjects = document.getElementById("closeProjects");

const toggleContacts = document.getElementById("toggleContacts");
const toggleContactButton = document.querySelector(".contacts");
const toggleContactAnimation = document.querySelector(".contact-animation");
const closeContacts = document.getElementById("closeContacts");
const closeAnimationOne = document.querySelector(".curtainOne");
const closeAnimationTwo = document.querySelector(".curtainTwo");


toggleAbout.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleAboutButton.classList.toggle("active");
})
closeAbout.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleAboutButton.classList.toggle("active");
    closeAnimationOne.classList.toggle("active");
    closeAnimationTwo.classList.toggle("active");
})

toggleSkills.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleSkillButton.classList.toggle("active");
})

closeSkills.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleSkillButton.classList.toggle("active");
    closeAnimationOne.classList.toggle("active");
    closeAnimationTwo.classList.toggle("active");
})

toggleProjects.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleProjectButton.classList.toggle("active");
})

closeProjects.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleProjectButton.classList.toggle("active");
    closeAnimationOne.classList.toggle("active");
    closeAnimationTwo.classList.toggle("active");
})

toggleContacts.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleContactButton.classList.toggle("active");
    
})

closeContacts.addEventListener("click", () => {
    toggleContactAnimation.classList.toggle("active");
    toggleContactButton.classList.toggle("active");
    closeAnimationOne.classList.toggle("active");
    closeAnimationTwo.classList.toggle("active");
})
