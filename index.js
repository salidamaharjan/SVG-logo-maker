//import inquirer
const inquirer = require('inquirer');

//Prepare a array of question
const toIncludeInLogo = [{
    name: "logo",
    message: "Enter three character you want to include in logo"
}]

//question appear in command line 
async function startMakingLogo() {
    const displayQUestion = await inquirer.prompt(toIncludeInLogo);
}

//function called to initialize the app
startMakingLogo();