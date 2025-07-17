"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").nodeValue = 23;

// console.log(document.querySelector(".guess").nodeValue);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#f4f813ff";
    document.querySelector(".number").style.width = "30rem";
    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "you lost the game";
    document.querySelector(".score").textContent = 0;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".score").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
