//Javascript 9 
console.log(document.body.parentNode);
// Javascript 10 document obejct model - add behaiour to you web application
const children = document.body.childNodes;
//console.log(children);

function listDomElements(){
  const children = document.body.childNodes;
console.log(children);
for (let  i = 0; i<children.length; i++){
  console.log(children[i])
}
}
//const description = document.getElementById("description");

const description = document.querySelector("#description"); //id - use hashtag for class - use .
console.log(description.innerHTML); // Codher strong amazing strong(p)

// if you want to interact with multiple elements at once the recommended method is document.querySelectorAll()
// This method returns a NodeList representing a list of the doucments elements that match the specified group of selectors 
// just like with the document.querySelector() you can pass any CSS Selector to the document.queySelectorAll() method

const birmingham = {
  name:"Birmingham",
  country: "United Kingdom",
  population: 1141010,
  landmarks: [
    "Brimingham Mueseum and Art Gallery",
    "Cadbury World",
    "National Sea Life Centre",
    "Library of Birmingham"
  ],
};

function displayPopulation(){
  const paragraph = document.createElement('p');
  const content = document.createTextNode('popultion: ' + birmingham.population );
  paragraph.appendChild(content); <p>number</p>
  document.body.appendChild(paragraph); <body><p>number</p></body>
}

//Task 
// create a new button in Javascript that calls the display population 

// create a new button in Javascript (cal it button)
// create text node. The text should show population 
//Append the text to the button 
// Add onclick to the button (button.onclick = displayPopulation)
// Append the document.body with the new button 

const button = document.createElement('button'); //<button></button>
const textButton = document.createTextNode('Show Population'); //Show Population
button.appendChild(textButton); // <button> show population </button>
//button.onClick = displayPopulation;
button.addEventListener("click",displayPopulation);
document.body.appendChild(button); // <body><button onClick ="displayPopulation"></button></body>


// displayPopulation();
// // console.log(displayPopulation());

// Creating Multiple Elements with loops

// inside the giveMeFruits.js there's a createListOfFruits function that takes an array of fruit as its parameter and renders them in an unordered list (<ul>) in the brower. The unordered list (<ul>) will be placed inside a <div> with the id list-container.

let fruit = ["mango", "orange","watermelon", "grapes", "lemon"];

function createListOfFruits(fruits){
  const listContainer = document.quearySelector("#list-constainer");
  const title = document.createElement("h2");
  const titleText = document.createTextNode('This is the list of fruits');
  const unOrderedList = document.createElement('ul');

  fruits.map((fruit)=>{
    const item = document.createElement('li');
    item.textContent = fruit;
    unOrderedList.aappendChild(item);
// 2:47
  })
  title.appendChild(titleText);
  listContainer.appendChild(title);
  listContainer.appendChild(unOrderedList);
}

createListOfFruits(fruit);


