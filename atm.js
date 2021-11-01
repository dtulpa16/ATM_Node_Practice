"use strict";
//TODO: Import necessary values from account.js
import {balance , pin} from './account'

function getBalance(money) {
  //TODO: Return the customer's acct. balance
  return alert(`Your current balance is ${money}`)
}

function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  balance -= withdrawAmount
  alert(`Withdrawal successful! Your new balance is ${balance}`)
  return balance
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  balance -= withdrawAmount
  alert(`Withdrawal successful! Your new balance is ${balance}`)
  return balance
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
  if(enteredPin == pin){
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
