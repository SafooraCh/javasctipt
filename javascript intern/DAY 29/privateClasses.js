"use strict";

//there are four types of privacy in classes
//1-public fields... (instances)
//2-private fields
//3-public methods
//4-private methods

class Account {
  //to make instances private they must be declared before constructor with a leading '#'
  #pin; //now pin cannot be accessed outside the class but inside instead

  constructor(owner, pin, birth) {
    this.owner = owner;
    this.#pin = pin;
    this.birthyear = birth;
  }

  //a private method
  #age() {
    return 2025 - this.birthyear;
  }

  //a public method
  licenceELigibility() {
    const age = this.#age(); //the age() method is accessible here but cannot be accessed outside
    age > 18
      ? console.log(
          `Hello ${this.owner}! You are eligible for a Driving Licence.`
        )
      : console.log(
          `Hello ${this.owner}! You are not yet eligible for a Driving Licence.`
        );
  }
}

//----------------creating object for Manahil
const Manahil = new Account("Manahil", 1234, 2005);

console.log(Manahil); //this wouldn't show pin because it is private

//-----------------------------------------------------trying to access private fields and methods (will cause error if uncommented)
//console.log(Manahil.#pin);  //error private field
//console.log(Manahil.#age());  //error private method

//-----------------------------------------------------accessing public method
Manahil.licenceELigibility(); // eligible (since age = 20 in 2025)
