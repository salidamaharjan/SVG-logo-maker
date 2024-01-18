//import inquirer
const inquirer = require("inquirer");
//import object using object destructuring
const { Circle, Triangle, Square } = require("./lib/shapes");
//import file system
const fs = require("fs/promises");

/**
 * Prepares an array of question
 * 
 * @returns {Promise}
 */
async function getAnswers() {
  const toIncludeInLogo = [
    {
      name: "text",
      message: "Enter three character you want to include in logo",
    },
    {
      name: "textColor",
      message: "Enter a color for the letters",
    },
    {
      name: "shape",
      type: "list",
      message: "Choose the shape for the logo",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      name: "shapeColor",
      message: "Enter color for shape",
    },
  ];
  return await inquirer.prompt(toIncludeInLogo);
}

//question appear in command line
async function startMakingLogo() {
  const displayQUestion = await getAnswers();
  let shape;
  //using switch case to capture the word, shape and color for the logo according to user input
  switch (displayQUestion.shape) {
    case "Circle":
      shape = new Circle(
        displayQUestion.text,
        displayQUestion.shapeColor,
        displayQUestion.textColor
      );
      break;
    case "Triangle":
      shape = new Triangle(
        displayQUestion.text,
        displayQUestion.shapeColor,
        displayQUestion.textColor
      );
      break;
    case "Square":
      shape = new Square(
        displayQUestion.text,
        displayQUestion.shapeColor,
        displayQUestion.textColor
      );
      break;
  }
  //data is stored in logo.svg file on hte basis of user answer
  await fs.writeFile("logo.svg", shape.draw());
  console.log("Generated logo.svg");
}

//function called to initialize the app
startMakingLogo();
