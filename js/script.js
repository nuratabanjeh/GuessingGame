/* eslint-disable indent */
'use strict';
// eslint-disable-next-line no-unused-vars
function welcome() {
  let name = prompt('What is you name?');
  document.getElementById('welcome').innerHTML = `Welcome ${name}!`;
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
}
