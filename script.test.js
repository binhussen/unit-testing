/** @format */

const stringLength = require('./script.js');

test('count length of the string', () => {
	expect(stringLength('hi mohammed')).toBe(11);
});
