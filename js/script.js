// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-01-JS/sw.js", {
    scope: "/ICS20-Unit-5-01-JS/",
  })
}

/**
 * This function calculates the area of a triangle.
 */
function button() {
  // random value generated
  var y = Math.floor(Math.random() * 7 + 1)
  var x = document.getElementById("guessField")
  document.getElementById("submitguess").if(x == y)
  {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT")
  }
  if (x > y) {
    /* if guessed number is greater than actual number*/
    guess++
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
  }
  if (x < y) {
    /* if guessed number is smaller than actual number*/
    guess++
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
  }
}
