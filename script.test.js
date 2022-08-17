/** @format */

const stringLength = require('./script.js');

test('count length of the string', () => {
	expect(stringLength('hi mhd')).toBe(6);
});

test('count length of the string', () => {
	expect(stringLength('')).toBe('Empty String');
});

test('count length of the string', () => {
	expect(stringLength('hello mohammed hussen')).toBe('Long String');
});
