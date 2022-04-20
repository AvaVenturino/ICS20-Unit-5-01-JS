// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-01-JS/sw.js", {
    scope: "/ICS20-Unit-6-01-JS/",
  });
}

/**
 * This function calculates the area of a triangle.
 */
function calculate() {
    // random value generated
    var y = Math.floor(Math.random() * 10 - 3);
    var guess = 1;
      
    document.getElementById("submitguess").{
      
   // number guessed by user     
   var x = document.getElementById("guessField").value;
  
   if(x == y)
   {    
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS ");
   }
   else if(x > y) /* if guessed number is greater than actual number*/ 
   {    
       guess++;
       alert("OOPS SORRY!! TRY A SMALLER NUMBER");
   }
   else
   {
       guess++;
       alert("OOPS SORRY!! TRY A GREATER NUMBER")
   }
}