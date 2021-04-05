/* eslint-disable indent */
'use strict';
let userName = '';
// eslint-disable-next-line no-unused-vars
function welcome() {
  userName = prompt('What is you name?');
  document.getElementById(
    'welcome'
  ).innerHTML = `Welcome ${userName} to the website!`;
}
// eslint-disable-next-line no-unused-vars
function guessingGame() {
  switch (prompt('Im Software Engineering Graduate').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      break;
    case 'no':
    case 'n':
      // console.log('incorrect');
      alert('incorrect');
      break;
  }
  //console.log('Im Software Engineering Graduate : Yes');
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
      break;
  }
  //console.log('I graduated from the universty of jordan : No');
  switch (prompt('i worked in my field for three years').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('incorrect');
      break;
    case 'no':
    case 'n':
      // console.log('correct');
      alert('correct');
      break;
  }
  //console.log('i worked in my field for three years : No');
  switch (prompt('i like backend development').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      break;
    case 'no':
    case 'n':
      // console.log('correct');
      alert('incorrect');
      break;
  }
  //console.log('i like backend development : Yes');
  switch (prompt('i want to someday be a AI designer').toLowerCase()) {
    case 'yes':
    case 'y':
      // console.log('correct');
      alert('correct');
      break;
    case 'no':
    case 'n':
      // console.log('correct');
      alert('incorrect');
      break;
  }
  //console.log('i want to someday be a AI designer : Yes');

  alert(`Welcome to our website ${userName}`);
}
