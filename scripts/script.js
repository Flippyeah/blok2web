// JavaScript Document
console.log("hi");

const openButton = document.querySelector("header button:first-of-type");


console.log(openButton)

openButton.onclick = openMenu;

function openMenu() {  

  var deNav = document.querySelector("nav:nth-of-type(1)");
  deNav.classList.toggle("toonMenu");
  
}

var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



//Bron: codepen. 2024. codepen.io (december) https://codepen.io/shooft/pen/yLKjzWa
function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
	

  function iniBolletjes() {
    for (bolletje of bolletjes) {
      bolletje.addEventListener("click", function(e){
				e.preventDefault();
		let newElement = carrousel.querySelector(this.hash);
        let carouselElementsContainerWidth = carrouselElementsContainer.offsetWidth;
        let newElementWidth = newElement.offsetWidth;
        let newElementOffset = newElement.offsetLeft;
        newElementOffset -= (carouselElementsContainerWidth - newElementWidth) / 2;
        carrouselElementsContainer.scrollTo({
          left: newElementOffset
        });
		    updateCurrentElement(newElement);
		    updateBolletjes(newElement);
      });
    }
	}
  
  
  function iniStartPosition() {
    carrouselElements[0].classList.add("current");
		bolletjes[0].classList.add("current");
    carrouselElementsContainer.scrollLeft = 0;
  }
  
	function updateCurrentElement(newElement) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		currentElement.classList.remove("current");
		newElement.classList.add("current");
	}

  function updateBolletjes(newElement){
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		currentBolletje.classList.remove("current");
	
    let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
		newBolletje.classList.add("current");
  }

  iniBolletjes();	
  iniStartPosition();
}

(function() {
  createCaroCarrousel("visualClues");
})();


