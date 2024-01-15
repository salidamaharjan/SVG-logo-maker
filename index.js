//import inquirer
const inquirer = require("inquirer");

//Prepare a array of question
const toIncludeInLogo = [
  {
    name: "logo",
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
}

//function called to initialize the app
startMakingLogo();
