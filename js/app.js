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
	return true;
}
