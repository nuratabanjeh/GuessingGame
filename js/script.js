/* eslint-disable indent */
'use strict';
// eslint-disable-next-line no-unused-vars
function guessingGame() {
  let name = prompt('What is you name?');

  document.getElementById('welcome').innerHTML = `Welcome ${name}!`;

  let q = [false, false, false, false, false];

  let s = prompt('Do you want to play a guessing game?', 'no');
  if (s.toLowerCase() === 'yes' || s.toLowerCase() === 'y') {
    switch (prompt('Im Software Engineering Graduate').toLowerCase()) {
      case 'yes':
      case 'y':
        q[0] = true;
        break;
    }
    switch (prompt('I graduated from the universty of jordan').toLowerCase()) {
      case 'no':
      case 'n':
        q[1] = true;
        break;
    }
    switch (prompt('i worked in my field for three years').toLowerCase()) {
      case 'no':
      case 'n':
        q[2] = true;
        break;
    }
    switch (prompt('i like backend development').toLowerCase()) {
      case 'yes':
      case 'y':
        q[3] = true;
        break;
    }
    switch (prompt('i want to someday be a AI designer').toLowerCase()) {
      case 'yes':
      case 'y':
        q[4] = true;
        break;
    }
    for (let i = 0; i < q.length; i++) {
      if (q[i] === true)
        // console.log(`question No.${i+1}, is correct`);
        alert(`question No.${i + 1}, is correct`);
      else {
        // console.log(`question No.${i+1}, is incorrect`);
        alert(`question No.${i + 1}, is incorrect`);
      }
    }
  }
}
