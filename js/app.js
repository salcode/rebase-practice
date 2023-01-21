const userInputEl = document.querySelector('#maybe-palindrome');

userInputEl.addEventListener('input', function(event) {
	const value = event.target.value;
	console.log(value);
});

function isPalindrome(string) {
	return true;
}
