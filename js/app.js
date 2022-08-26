const userInputEl = document.querySelector('#maybe-palindrome');
const successMessage = document.querySelector('#palindrome-message');

userInputEl.addEventListener('input', function(event) {
  const value = event.target.value;
  if (isPalindrome(value)) {
    successMessage.className = 'is-palindrome';
  } else {
    successMessage.className = '';
  }
  console.log(value);
});

function isPalindrome(value) {
  const simplifiedStr = value.toLowerCase().replace(/\s/g, '');;
  return simplifiedStr === [...simplifiedStr].reverse().join('');
}

function testIsPalindrome() {
  let success = true;
  [
    [ 'racecar', true ],
    [ 'RaCecar', true ],
    [ 'car', false ],
    [ 'a Toyota', true ],
  ].forEach(
    ([str, expected]) => {
      if (expected === isPalindrome(str)) {
        console.log(
          `isPalindrome(${str}) returned ` +
          (expected ? 'True' : 'False')
        );
      } else {
        console.error(
          `isPalindrome(${str}) did NOT return ` +
          (expected ? 'True' : 'False')
        );
        success = false;
      }
      if (! success) {
        console.error('Failed');
      } else {
        console.log('Success');
      }
    }
  );
}
