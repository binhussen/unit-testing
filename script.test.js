/** @format */

const { stringLength, reverseString } = require('./script.js');

test('count length of the string', () => {
	expect(stringLength('hi mhd')).toBe(6);
});

test('check empty string', () => {
	expect(stringLength('')).toBe('Empty String');
});

test('check longer than 10', () => {
	expect(stringLength('hello mohammed hussen')).toBe('Long String');
});

test('check reverse string', () => {
	expect(reverseString('hello')).toBe('olleh');
});
