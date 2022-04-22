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
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("random-number").innerHTML = Math.floor(Math.random() * 6) + 1
}

    // process
    if (random-number == slider-value) {
    print("Congratulations!");
}

    // process
    if (random-number != slider-value) {
    print("Try again!");
}
