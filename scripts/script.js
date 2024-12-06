// JavaScript Document
console.log("hi");

const openButton = document.querySelector("header button:first-of-type");

console.log(openButton)

openButton.onclick = openMenu;

function openMenu() {  

  var deNav = document.querySelector("nav");
//   console.log(deNav)

  deNav.classList.toggle("toonMenu");
}


var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}