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

module.exports = { stringLength, reverseString };
