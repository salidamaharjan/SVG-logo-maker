//import inquirer
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require('fs/promises');

//Prepare a array of question
const toIncludeInLogo = [
  {
    name: "word",
    message: "Enter three character you want to include in logo",
  },
  {
    name: "textColor",
    message: "Enter a color for the letters"
  },
  {
    name: "shapes",
    type: "list",
    message: "Choose the shape for the logo",
    choices: ["Circle", "Triangle", "Square"]
  },
  {
    name: "shapeColor",
    message: "Enter color for shape"
  }
];

//question appear in command line
async function startMakingLogo(response) {
  const displayQUestion = await inquirer.prompt(toIncludeInLogo);
  let shape;
  switch (displayQUestion.shapes) {
    case 'Circle':
      shape = new Circle(displayQUestion.word, displayQUestion.shapeColor, displayQUestion.textColor);
      break;
    case 'Triangle':
      shape = new Triangle(displayQUestion.word, displayQUestion.shapeColor, displayQUestion.textColor);
      break;
    case 'Square':
      shape = new Square(displayQUestion.word, displayQUestion.shapeColor, displayQUestion.textColor);
  }
  await fs.writeFile('logo.svg', shape.draw());
  console.log("Logo Created");
}


//function called to initialize the app
startMakingLogo();
