/** @format */

const stringLength = (string) => {
	if (string.length === 0) {
		return 'Empty String';
	} else if (string.length > 10) {
		return 'Long String';
	}
	return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');
class Calculator {
	add(a, b) {
		return a + b;
	}
	sub(a, b) {
		return a - b;
	}
	mult(a, b) {
		return a * b;
	}
	div(a, b) {
		return a / b;
	}
}

const capitalize = (string) => {
	if (string.length === 0) {
		return 'Empty String';
	}
	return string
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
		.join(' ');
};
module.exports = { stringLength, reverseString, Calculator, capitalize };
