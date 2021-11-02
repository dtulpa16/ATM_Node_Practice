
//TODO: Import necessary values from account.js
let {balance , pin} = require('./account')

function getBalance() {
  //TODO: Return the customer's acct. balance
  console.log(`Your current balance is ${balance}`)
}

function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  balance -= withdrawAmount
  console.log(`Withdrawal successful! Your new balance is ${balance}`)
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  balance += depositAmount
  console.log(`Deposit successful! Your new balance is ${balance}`)
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
  if(enteredPin = pin){
    return true
  }else if(enteredPin != pin){
    return false
  }
}

//TODO: Export these functions

module.exports={
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin
}
