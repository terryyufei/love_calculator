// Author: Paul John <rainson.work@gmail.com>
//
// An algorithm that calculates love percentage based on names.
//
// WARNING: This algorithm is just computation of characters from
// the provided names, it doesn't represent how you really
// feel about each other, so don't take it personal.
'use strict';

function calculateLove (chances) {
  if (chances.length === 2) {
    const lovePercentage = Number(`${chances[0]}${chances[1]}`);
    return lovePercentage;
  }

  const newChances = [];

  // Check if the length of the chances array is even or odd
  if (chances.length % 2 === 0) {
    while (chances.length) {
      const first = chances.shift();
      const last = chances.pop();
      newChances.push(first + last);
    }
  } else {
    while (chances.length > 1) {
      const first = chances.shift();
      const last = chances.pop();
      newChances.push(first + last);
    }
    newChances.push(chances.shift()); // Add the last remaining element as is
  }

  return calculateLove(newChances);
}

function calculateLovePercentage (name1, name2) {
  if (name1.trim().includes(' ') || name2.trim().includes(' ')) {
    return ('Please provide single names only.');
  } else if (name1 === '' || name2 === '') {
    return ('Please provide both names in the input boxes.');
  }

  const sentence = `${name1.toLowerCase()} loves ${name2.toLowerCase()}`;
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const chances = Array.from({ length: 26 }, () => 0); // Initialize an array with 26 zeros

  for (const char of sentence) {
    const index = characters.indexOf(char);
    if (index !== -1) {
      chances[index]++;
    }
  }

  const nonZeroChances = chances.filter(count => count !== 0);
  const totalNonZeroChances = nonZeroChances.reduce((sum, count) => sum + count, 0);
  const lovePercentage = calculateLove(nonZeroChances);

  // check if chances exceed a hundred.
  if (lovePercentage > 100) {
    const normalizedLovePercentage = Math.floor((totalNonZeroChances / 26) * lovePercentage);
    return (normalizedLovePercentage > 100 ? (100 - 1) : normalizedLovePercentage); // one percent for self-love
  }
  return (lovePercentage);
}

// Author: Sophia
// I like your approach Sophia :)
const calculateBtn = document.getElementById('calculator_btn');
const resultElement = document.getElementById('result');

// Add Event Listener for the click event.
calculateBtn.addEventListener('click', function () {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  // Calculate the love percentage using the new function
  const lovePercentage = calculateLovePercentage(name1, name2);

  let resultText = '';

  if (typeof lovePercentage === 'string') {
    // alert(lovePercentage); // Alert the error message
    resultText = `Error: ${lovePercentage}`;
  } else if (lovePercentage <= 20) {
    resultText = `Your love percentage is ${lovePercentage}, and you are wasting your time! 🤣`;
  } else if (lovePercentage > 20 && lovePercentage <= 50) {
    resultText = `Your love percentage is ${lovePercentage}, and maybe start looking around.🧐`;
  } else if (lovePercentage > 50 && lovePercentage < 80) {
    resultText = `Your love percentage is ${lovePercentage}, and it could work, who knows? 🤭`;
  } else {
    resultText = `Your love percentage is ${lovePercentage}, and you were meant to be unless, they don't like Beyoncé then you gotta dump them.🥰`;
  }

  resultElement.textContent = resultText;
});
