
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
const {balance, withdraw, deposit, validatePin}=require("./atm")
const prompt = require('prompt-sync')();
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
  let userPin = parseInt(prompt('Please enter your pin'))
  let valid = validatePin(userPin)
  if(valid == true){
    console.log('Successful login!')
    mainMenu()
  }else if(valid == false){
    console.log('Incorrect pin. Please try again')
    accessATM()
  }
}
accessATM()

//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  let userIsHappy = false
  while(userIsHappy == false){
    let userInput = parseInt(prompt('Welcome! \n Enter 1 to check current balance \n Enter 2 to make a deposit \n Enter 3 to make a withdrawal \n Enter 4 to return to main menu \n Enter 5 to exit ATM'))
    if(userInput === 1){
      balance()
    }else if(userInput === 2){
      let userDeposit = parseInt(prompt('How much would you like to desposit?'))
      deposit(userDeposit)
    }else if(userInput === 3){
      let userWithdraw = parseInt(prompt('How much would you like to withdraw?'))
      withdraw(userWithdraw)
    }
    else if(userInput === 4){
      mainMenu()
    }
    else if(userInput == 5){
      console.log('Thank you! Have a nice day!')
      userIsHappy = true
    }
  }
  
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
