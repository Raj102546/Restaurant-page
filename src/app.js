// Select buttons
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

// Select sections
const homeSec = document.querySelector(".homeSec");
const menuSec = document.querySelector(".menuSec");
const contactSec = document.querySelector(".contact");

// Function to hide all sections and display only the selected one
function showSection(section) {
  homeSec.classList.add("hide");
  menuSec.classList.add("hide");
  contactSec.classList.add("hide");
  
  section.classList.remove("hide"); // Show the selected section
}

// Event listeners for buttons
homeBtn.addEventListener("click", () => {
  showSection(homeSec);
});

menuBtn.addEventListener("click", () => {
  showSection(menuSec);
});

contactBtn.addEventListener("click", () => {
  showSection(contactSec);
});

// Initially display the home section
window.addEventListener("load", () => {
  showSection(homeSec);
});
