/* eslint-disable indent */
'use strict';
let userName = '';
let correctAnswers = 0;

// eslint-disable-next-line no-unused-vars
function welcome() {
  userName = prompt('What is you name?');
  document.getElementById(
    'welcome'
  ).innerHTML = `Welcome ${userName} to the website!`;
}

// eslint-disable-next-line no-unused-vars
function guessingGame() {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  function question1(){
  switch (prompt('Im Software Engineering Graduate').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      correctAnswers++;
      break;
    case 'no':
    case 'n':
      // console.log('incorrect');
      alert('incorrect');
      break;
  }
  //console.log('Im Software Engineering Graduate : Yes');
}
function question2(){
  switch (prompt('I graduated from the universty of jordan').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('incorrect');
      alert('incorrect');
      break;
    case 'no':
    case 'n':
      // console.log('correct');
      alert('correct');
      correctAnswers++;
      break;
  }
  //console.log('I graduated from the universty of jordan : No');
}
function question3(){
  switch (prompt('i worked in my field for three years').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('incorrect');
      alert('incorrect');
      break;
    case 'no':
    case 'n':
      // console.log('correct');
      alert('correct');
      correctAnswers++;
      break;
  }
  //console.log('i worked in my field for three years : No');
}
function question4(){
  switch (prompt('i like backend development').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      correctAnswers++;
      break;
    case 'no':
    case 'n':
      // console.log('incorrect');
      alert('incorrect');
      break;
  }
  //console.log('i like backend development : Yes');
}
function question5(){
  switch (prompt('i want to someday be a AI designer').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      correctAnswers++;
      break;
    case 'no':
    case 'n':
      // console.log('incorrect');
      alert('incorrect');
      break;
  }
  //console.log('i want to someday be a AI designer : Yes');
}
function question6(){
  let number = 0;
  for (let i = 0; i < 4; i++) {
    number = parseInt(
      prompt(
        `Guess my Number, its between 1 and 10, you only have ${
          4 - i
        } chance left`
      )
    );
    if (number === 7) {
      // console.log('correct');
      alert('Correct!');
      correctAnswers++;
      break;
    } else if (number < 7) alert('Too Low!');
    else if (number > 7) alert('Too High!');
    // console.log('Incorrect');

    if (i === 3) alert('You ran out of chances, the answer is 7');
  }
  // console.log('Guess my Number : 7');
}
function question7(){
  let roman = ['XI', 'XV', 'XVII', 'XX'];
  let input = [];
  let correct = 0;

  for (let i = 0; i < 6; i++) {
    input[i] = prompt(
      `[I,III,IV,VI,IX,X,XI,XV,XVII,XX] Out of these 10 roman numerals which ones are larger than ten?, you have ${
        6 - i
      } tries`
    ).toUpperCase();
    for (let j = 0; j < roman.length; j++) {
      if (input[i] === roman[j]) {
        alert('You got one!');
        // console.log('You got one!');
        correct++;
      }
    }

    let answers = '';

    if (correct === roman.length) {
      for (let i = 0; i < input.length; i++) {
        answers += input[i] + ', ';
      }
      alert(
        'You got it, Here are the correct answers[XI,XV,XVII,XX]' +
          ` You answered [${answers}]`
      );
      correctAnswers++;
      break;
    }

    if (i === 5) {
      for (let i = 0; i < input.length; i++) {
        answers += input[i] + ', ';
      }
      alert(
        'You ran out of tries :( , Here are the correct answers[XI,XV,XVII,XX]' +
          ` You answered [${answers}]`
      );
    }
  }
}
  alert(
    `Welcome to our website ${userName}, you got ${correctAnswers} correct answers out of 7`
  );
}
