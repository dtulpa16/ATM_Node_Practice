"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
import {balance, withdraw, deposit, validatePin} from "./atm"
const prompt = require('prompt-sync')();
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
  let userPin = prompt('Please enter your pin')
  let valid = validatePin(userPin)
  if(valid == true){
    alert('Successful login!')
    mainMenu()
  }else if(valid == false){
    alert('Incorrect pin. Please try again')
    accessATM()
  }
}
accessATM()

//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
